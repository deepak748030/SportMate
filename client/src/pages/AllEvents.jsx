import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';
import Layout from '../components/layouts/Layout';
import apiUrl from '../api/config';
import { useAuth } from "../context/auth";
import Spinner from '../components/Spinner';
import EventCard from "../components/card/EventCard";

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
            if (auth?.user?._id) {
                const subscription = await axios.get(`${apiUrl}/subscription/${auth?.user?._id}`);
                if (subscription?.data?.active === true) {
                    try {
                        const res = await axios.post(`${apiUrl}/teamjoin/${selectedEvent._id}`, { teamId, userId: auth?.user?._id });
                        if (res?.status === 200 && res?.data?.message) {
                            toast.success(res.data.message);
                            setShowModal(false);
                            getEventData();
                        }
                    } catch (err) {
                        if (err.response?.status === 400) {
                            toast.error(err.response.data.message);
                        } else {
                            toast.error('An error occurred while joining the event.');
                        }
                    }
                } else {
                    toast.error('You don\'t have a subscription. Please purchase one.');
                }
            }
        } catch (error) {
            console.error('Error checking subscription:', error);
            toast.error('An error occurred while checking the subscription.');
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

                    <div className="col-12 mb-4">
                        <h1 className="text-center">All Events</h1>
                    </div>
                    <EventCard myEventsData={eventData} allEvents={true} JoinEvent={(event) => { handleJoinEvent(event) }} Modal={(event) => { openModal(event) }} />

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
