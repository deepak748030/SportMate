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

export default function OrganizerDash() {
    const [auth] = useAuth();
    const navigate = useNavigate(); // Added navigate hook

    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [eventName, setEventName] = useState('');
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [price, setPrice] = useState('');
    const [numTeams, setNumTeams] = useState('');
    const [winningPrize, setWinningPrize] = useState('');
    const [myEventsData, setEventsData] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [userId, setUserId] = useState('');

    const handleShow = async () => {
        const hasActiveSubscription = await checkSubscriptionStatus();
        if (hasActiveSubscription) {
            setShowModal(true);
        } else {
            navigate('/subscription');
        }
    };

    const checkSubscriptionStatus = async () => {
        try {
            const user = auth?.user?._id;
            const res = await axios.get(`${apiUrl}/subscription/${user}`);
            if (res?.data?.active) {
                return true;
            } else {
                toast.warning('Your subscription has ended. Please renew to create events.');
                return false;
            }
        } catch (error) {
            console.error('Error checking subscription status:', error);
            return false;
        }
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
            const priceNum = parseFloat(price);
            const winningPrizeNum = parseFloat(winningPrize);
            const numTeamsNum = parseFloat(numTeams);
            const res = await axios.post(`${apiUrl}/create`, {
                user: user,
                eventName,
                place,
                date,
                time,
                price: priceNum,
                numTeams: numTeamsNum,
                winningPrize: winningPrizeNum
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
            const priceNum = parseFloat(price);
            const winningPrizeNum = parseFloat(winningPrize);
            const numTeamsNum = parseFloat(numTeams);
            const res = await axios.put(`${apiUrl}/events/${selectedEvent._id}`, {
                eventName,
                place,
                date,
                time,
                price: priceNum,
                numTeams: numTeamsNum,
                winningPrize: winningPrizeNum
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
        setPlace(event.place || '');
        setDate(event.date || '');
        setTime(event.time || '');
        setPrice(event.price?.toString() || '');
        setNumTeams(event.numTeams?.toString() || '');
        setWinningPrize(event.winningPrize?.toString() || '');
        handleShow();
    };

    return (
        <Layout>
            <div className="container-fluid bg-light p-4 md:p-8 lg:p-12">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-4">
                            <UserProfile />
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">My Events</h5>
                                    {loading ? (
                                        <div className="text-center">
                                            <Spinner animation="border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </Spinner>
                                        </div>
                                    ) : myEventsData.length > 0 ? (
                                        myEventsData.map(({ date, eventName, numTeams, place, price, time, _id, user, winningPrize }) => (
                                            <div className="row mb-4" key={_id} onClick={() => handleEditEvent({ _id, eventName, place, date, time, price, numTeams, user, winningPrize })}>
                                                <div className="col-md-4">
                                                    <img src={'https://media.istockphoto.com/id/1904589046/photo/two-adult-football-players-running-and-kicking-a-soccer-ball-legs-of-two-young-football.jpg?s=2048x2048&w=is&k=20&c=CSTkGc00q6A1VXG8YaHuBbLO58EeHFHkM5uEPoyMYZc='} alt="Event Banner" className="img-fluid rounded" />
                                                </div>
                                                <div className="col-md-8">
                                                    <h6 className="mt-2">{eventName}</h6>
                                                    <div className="row">
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-calendar-fill me-2"></i>
                                                            <span>{date.slice(0, 10)}</span>
                                                        </div>
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-clock-fill me-2"></i>
                                                            <span>{time}</span>
                                                        </div>
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-geo-alt-fill me-2"></i>
                                                            <span>{place}</span>
                                                        </div>
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-people-fill me-2"></i>
                                                            <span>{numTeams} Teams</span>
                                                        </div>
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-currency-dollar me-2"></i>
                                                            <span>{price}</span>
                                                        </div>
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-trophy-fill me-2"></i>
                                                            <span>{winningPrize} $ Prize</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center mt-4">
                                            <p>No events found. Click on "Create Event" to add a new event.</p>
                                        </div>
                                    )}
                                    <div className="text-center mt-4">
                                        <Button variant="primary" onClick={handleShow}>Create Event</Button>
                                    </div>
                                </div>
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
                                    <span className="badge bg-primary rounded-pill">{myEventsData.reduce((total, event) => total + event.numTeams, 0)}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Total Prize Money
                                    <span className="badge bg-primary rounded-pill">{myEventsData.reduce((total, event) => total + event.winningPrize, 0)} $</span>
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
                        <Form.Group className="mb-3" controlId="formPlace">
                            <Form.Label>Place</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter place"
                                value={place}
                                onChange={(e) => setPlace(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formTime">
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPrice">
                            <Form.Label>Price ($)</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNumTeams">
                            <Form.Label>Number of Teams</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter number of teams"
                                value={numTeams}
                                onChange={(e) => setNumTeams(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formWinningPrize">
                            <Form.Label>Winning Prize ($)</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter winning prize"
                                value={winningPrize}
                                onChange={(e) => setWinningPrize(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" type="submit" disabled={loading}>
                                {loading ? 'Saving...' : selectedEvent ? 'Update Event' : 'Create Event'}
                            </Button>
                            {selectedEvent && (
                                <Button variant="danger" onClick={handleDeleteEvent} disabled={loading}>
                                    {loading ? 'Deleting...' : 'Delete Event'}
                                </Button>
                            )}
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </Layout>
    );
}
