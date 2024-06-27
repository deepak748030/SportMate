import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import axios from 'axios';
import apiUrl from '../../api/config';
import { useAuth } from '../../context/auth';
import { toast } from 'react-toastify';

export default function OrganizerDash() {
    const [auth, setAuth] = useAuth();


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
    const [selectedEvent, setSelectedEvent] = useState(null); // State to hold the selected event for update/delete
    const [userId, setUserId] = useState('')

    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setShowModal(false);
        setSelectedEvent(null); // Reset selected event when modal is closed
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
            console.log(selectedEvent._id)

            const res = await axios.put(`${apiUrl}/events/${selectedEvent._id}`, {
                eventName,
                place,
                date,
                time,
                price: priceNum,
                numTeams: numTeamsNum,
                winningPrize: winningPrizeNum
            });
            console.log(eventName,
                place,
                date,
                time,
                priceNum,
                numTeamsNum,
                winningPrizeNum)
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
            await setUserId(auth?.user?._id)
            const res = await axios.get(`${apiUrl}/events/${userId}`);
            if (res?.data) {
                await setEventsData(res.data);
            }
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getEventData();
    }, [userId]);

    const organizerData = [
        {
            avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
            name: 'Robert Wolfkisser',
            job: 'Event Organizer',
            email: 'rob_wolf@gmail.com',
            phone: '+44 (452) 886 09 12',
        },
    ];

    const handleEditEvent = (event) => {
        setSelectedEvent(event);
        setEventName(event.eventName || '');
        setPlace(event.place || '');
        setDate(event.date || '');
        setTime(event.time || '');
        setPrice(event.price?.toString() || '');
        setNumTeams(event.numTeams?.toString() || '');
        setWinningPrize(event.winningPrize?.toString() || ''); // Ensure winningPrize is properly set or defaults to an empty string
        handleShow();
    };

    return (
        <Layout>
            <div className="container-fluid bg-light p-4 md:p-8 lg:p-12">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-4">
                            {organizerData.map((organizer, index) => (
                                <div className="card mb-4" key={index}>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <img src={organizer.avatar} className="rounded-circle me-3" alt={organizer.name} style={{ width: '64px', height: '64px' }} />
                                            <div>
                                                <h5 className="card-title mb-1">{organizer.name}</h5>
                                                <p className="card-text text-muted">{organizer.job}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className=" d-flex flex-column flex-md-row">
                                            <div className="col-6 d-flex align-items-center mb-2">
                                                <i className="bi bi-envelope-fill me-2"></i>
                                                <span>{organizer.email}</span>
                                            </div>
                                            <div className="col-6 d-flex align-items-center mb-2 flex-wrap">
                                                <i className="bi bi-telephone-fill me-2"></i>
                                                <span>{organizer.phone}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">My Events</h5>
                                    {loading ? (
                                        <div className="text-center">
                                            <Spinner animation="border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </Spinner>
                                        </div>
                                    ) : (
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
                                                            <span>{numTeams} / {numTeams}</span>
                                                        </div>
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-person-fill me-2"></i>
                                                            <span>{user?.firstName}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                            <div className="card mt-4">
                                <div className="card-body">
                                    <h5 className="card-title">Upload Event</h5>
                                    <Button variant="primary" onClick={handleShow}>
                                        <i className="bi bi-ticket-fill me-2"></i>
                                        Upload Event
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Event Stats</h5>
                                    <p className="card-text">Track your event stats and manage them efficiently.</p>
                                    <Link to="#" className="btn btn-primary">
                                        <i className="bi bi-bar-chart-fill me-2"></i>
                                        View Stats
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Event Creation/Update */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedEvent ? 'Edit Event' : 'Create New Event'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={selectedEvent ? handleUpdateEvent : handleSaveChanges}>
                        <Form.Group className="mb-3" controlId="eventName">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter event name" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="place">
                            <Form.Label>Place</Form.Label>
                            <Form.Control type="text" placeholder="Enter place" value={place} onChange={(e) => setPlace(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter date" value={date} onChange={(e) => setDate(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="time">
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="time" placeholder="Enter time" value={time} onChange={(e) => setTime(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="numTeams">
                            <Form.Label>Number of Teams</Form.Label>
                            <Form.Control type="number" placeholder="Enter number of teams" value={numTeams} onChange={(e) => setNumTeams(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="winningPrize">
                            <Form.Label>Winning Prize</Form.Label>
                            <Form.Control type="number" placeholder="Enter winning prize" value={winningPrize} onChange={(e) => setWinningPrize(e.target.value)} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {selectedEvent ? 'Update Event' : 'Create Event'}
                        </Button>
                        {selectedEvent && (
                            <Button variant="danger" className="ms-2" onClick={handleDeleteEvent}>
                                Delete Event
                            </Button>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Layout>
    );
}
