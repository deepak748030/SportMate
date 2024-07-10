import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';
import Layout from '../components/layouts/Layout';
import apiUrl from '../api/config';
import { useAuth } from "../context/auth";
import Spinner from '../components/Spinner'

export default function AllEvents() {
    const [auth] = useAuth();
    const [eventData, setEventData] = useState([]);
    const [loadingEvents, setLoadingEvents] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [teamId, setTeamId] = useState('');
    const [teams, setTeams] = useState([]);

    // Fetch sports events
    const getEventData = async () => {
        try {
            const res = await axios.get(`${apiUrl}/approvedevents`);
            if (res?.data) {
                setEventData(res?.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingEvents(false); // Set loading state to false when done fetching
        }
    };

    const fetchTeams = async () => {
        try {
            const response = await axios.get(`${apiUrl}/teams/${auth?.user?._id}`);
            setTeams(response.data);
        } catch (error) {
            console.error('Error fetching teams:', error);
        }
    };

    useEffect(() => {
        fetchTeams();
        getEventData();
    }, []);

    const handleJoinEvent = async (event) => {
        try {
            if (event.participants.length >= event.numTeams) {
                toast.error('Users joined limit fulfilled');
                return;
            }
            const res = await axios.post(`${apiUrl}/users/${auth?.user?._id}/join/${event._id}`);
            if (res?.data) {
                toast.success('Joined event successfully');
                getEventData();
            } else {
                toast.error('Already joined event');
            }
        } catch (error) {
            console.error(error);
            toast.error('Already joined event');
        }
    };

    const handleJoinByTeam = async () => {
        try {
            const res = await axios.post(`${apiUrl}/teamjoin/${selectedEvent._id}`, {
                teamId
            });
            console.log(teamId, selectedEvent._id)
            if (res?.data) {
                toast.success('Team joined event successfully');
                setShowModal(false);
                getEventData();
            } else {
                toast.error('Team already joined event');
            }
        } catch (error) {
            console.error(error);
            toast.error('Error joining event with team');
        }
    };

    const openModal = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedEvent(null);
    };

    if (loadingEvents) {
        return <Spinner />;
    }

    return (
        <Layout>
            <div className="container-fluid bg-light p-4 md:p-8 lg:p-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <h1 className="text-center">All Events</h1>
                        </div>
                        <div className="col-lg-8 col-sm-12 mb-4">
                            {eventData.length === 0 ? (
                                <div className="text-center">
                                    <h5>No events available at the moment</h5>
                                </div>
                            ) : (
                                eventData.map(({ _id, date, eventName, numTeams, place, participants, price, time, user, winningPrize }) => (
                                    <div className="card mb-4" key={_id}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={'https://media.istockphoto.com/id/1904589046/photo/two-adult-football-players-running-and-kicking-a-soccer-ball-legs-of-two-young-football.jpg?s=2048x2048&w=is&k=20&c=CSTkGc00q6A1VXG8YaHuBbLO58EeHFHkM5uEPoyMYZc=' || 'https://via.placeholder.com/1200x800'} alt="Event Banner" className="img-fluid rounded mt-2" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{eventName}</h5>
                                                    <div className="row">
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-calendar-fill me-2"></i>
                                                            <span>{date.slice(0, 10)}</span>
                                                        </div>
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-clock-fill me-2"></i>
                                                            <span>{time}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-geo-alt-fill me-2"></i>
                                                            <span>{place}</span>
                                                        </div>
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-currency-dollar me-2"></i>
                                                            <span>{price}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-people-fill me-2"></i>
                                                            <span>{participants.length} / {numTeams}</span>
                                                        </div>
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-person-fill me-2"></i>
                                                            <span>{user?.firstName}</span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3">
                                                        <button onClick={() => handleJoinEvent({ _id, eventName, participants, numTeams })} className="btn btn-warning me-2">
                                                            Join Event
                                                        </button>
                                                        <button onClick={() => openModal({ _id, eventName, participants, numTeams })} className="btn btn-primary">
                                                            Join by Team
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Join Event by Team</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formTeamSelect">
                            <Form.Label>Select Team</Form.Label>
                            <Form.Control
                                as="select"
                                value={teamId}
                                onChange={(e) => setTeamId(e.target.value)}
                            >
                                <option value="">Select a team</option>
                                {teams.map((team) => (
                                    <option key={team._id} value={team._id}>
                                        {team.teamName}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleJoinByTeam}>
                        Join Event
                    </Button>
                </Modal.Footer>
            </Modal>
        </Layout>
    );
}
