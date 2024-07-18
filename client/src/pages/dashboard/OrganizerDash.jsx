import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import axios from 'axios';
import apiUrl from '../../api/config';
import { useAuth } from '../../context/auth';
import { toast } from 'react-toastify';
import UserProfile from '../../components/User/UserProfile';
import EventCard from '../../components/card/EventCard';

export default function OrganizerDash() {
    const [auth] = useAuth();
    const navigate = useNavigate(); // Added navigate hook

    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [eventName, setEventName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [gamesTime, setGamesTime] = useState('');
    const [length, setLength] = useState('');
    const [teamFee, setTeamFee] = useState('');
    const [location, setLocation] = useState('');
    const [myEventsData, setEventsData] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [winningPrize, setWinningPrize] = useState('');


    const handleShow = async () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedEvent(null);
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const user = auth?.user?._id;
            const teamFeeNum = parseFloat(teamFee);
            const res = await axios.post(`${apiUrl}/create`, {
                user: user,
                eventName,
                startDate,
                dayOfWeek,
                gamesTime,
                length,
                teamFee: teamFeeNum,
                location,
                winningPrize
            });
            if (res?.data) {
                handleClose();
                toast.success('Event created');
                await getEventData();
            }
        } catch (error) {
            console.error('Error creating event:', error);
            toast.error('Failed to create event');
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateEvent = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const teamFeeNum = parseFloat(teamFee);
            const res = await axios.put(`${apiUrl}/events/${selectedEvent._id}`, {
                eventName,
                startDate,
                dayOfWeek,
                gamesTime,
                length,
                teamFee: teamFeeNum,
                location,
                winningPrize
            });
            if (res?.data) {
                handleClose();
                toast.success('Event updated');
                await getEventData();
            }
        } catch (error) {
            console.error('Error updating event:', error);
            toast.error('Failed to update event');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteEvent = async () => {
        try {
            setLoading(true);
            const res = await axios.delete(`${apiUrl}/events/${selectedEvent._id}`);
            if (res?.data) {
                handleClose();
                toast.success('Event deleted');
                await getEventData();
            }
        } catch (error) {
            console.error('Error deleting event:', error);
            toast.error('Failed to delete event');
        } finally {
            setLoading(false);
        }
    };

    const getEventData = async () => {
        try {
            setLoading(true);
            const user = auth?.user?._id;
            const res = await axios.get(`${apiUrl}/events/${user}`);
            if (res?.data) {
                setEventsData(res.data);
            } else {
                setEventsData([]); // Ensure myEventsData is set to an empty array if no data is returned
            }
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getEventData();
    }, [auth?.user?._id]);

    const handleEditEvent = (event) => {
        setSelectedEvent(event);
        setEventName(event.eventName || '');
        setStartDate(event.startDate || '');
        setDayOfWeek(event.dayOfWeek || '');
        setGamesTime(event.gamesTime || '');
        setLength(event.length || '');
        setTeamFee(event.teamFee?.toString() || '');
        setLocation(event.location || '');
        setWinningPrize(event.winningPrize || '')
        handleShow();
    };

    return (
        <Layout>
            <div className="container-fluid bg-light p-4 md:p-8 lg:p-12">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-4">
                            <UserProfile />

                            <EventCard myEventsData={myEventsData} handleClick={handleEditEvent} orgDash={true} />
                            <div className="text-center mt-4">
                                <Button variant="primary" onClick={handleShow}>Create Event</Button>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <h5 className="mb-3">Statistics</h5>
                            <ul className="list-group mb-4">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Total Events
                                    <span className="badge bg-primary rounded-pill">{myEventsData.length}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Total Teams Participated
                                    <span className="badge bg-primary rounded-pill">
                                        {myEventsData.reduce((total, event) => total + (event.numTeams || 0), 0)}
                                    </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Total Prize Money
                                    <span className="badge bg-primary rounded-pill">
                                        {myEventsData.reduce((total, event) => total + (event.winningPrize || 0), 0)} $
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedEvent ? 'Edit Event' : 'Create Event'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={selectedEvent ? handleUpdateEvent : handleSaveChanges}>
                        <Form.Group className="mb-3" controlId="formEventName">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter event name"
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formStartDate">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Enter start date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDayOfWeek">
                            <Form.Label>Day of the Week</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter day of the week"
                                value={dayOfWeek}
                                onChange={(e) => setDayOfWeek(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGamesTime">
                            <Form.Label>Games Time</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter games time"
                                value={gamesTime}
                                onChange={(e) => setGamesTime(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLength">
                            <Form.Label>Length</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter length"
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formTeamFee">
                            <Form.Label>Team Fee</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter team fee"
                                value={teamFee}
                                onChange={(e) => setTeamFee(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formWinningPrize">
                            <Form.Label>Winning Prize</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter winning prize"
                                value={winningPrize}
                                onChange={(e) => setWinningPrize(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            {selectedEvent ? (
                                <>
                                    <Button variant="danger" onClick={handleDeleteEvent}>
                                        {loading ? <Spinner animation="border" size="sm" /> : 'Delete Event'}
                                    </Button>
                                    <Button variant="primary" type="submit">
                                        {loading ? <Spinner animation="border" size="sm" /> : 'Save Changes'}
                                    </Button>
                                </>
                            ) : (
                                <Button variant="primary" type="submit">
                                    {loading ? <Spinner animation="border" size="sm" /> : 'Create Event'}
                                </Button>
                            )}
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </Layout>
    );
}
