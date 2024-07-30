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
    const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [teamId, setTeamId] = useState('');
    const [teams, setTeams] = useState([]);
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

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

    const handleJoinEvent = (event) => {
        if (event.leagues) {
            // Open subscription modal if event is a league
            setSelectedEvent(event);
            setShowSubscriptionModal(true);
        } else {
            joinEvent(event);
        }
    };

    const joinEvent = async (event) => {
        try {
            if (auth?.user?._id) {
                if (event.participants.length >= event.numTeams) {
                    toast.error('Users joined limit fulfilled');
                    return;
                }
                const res = await axios.post(`${apiUrl}/users/${auth?.user?._id}/join/${event._id}`);
                if (res?.status === 200 && res?.data?.message) {
                    toast.success(res.data.message);
                    getEventData();
                } else {
                    toast.error('Already joined event');
                }
            }
        } catch (err) {
            if (err.response?.status === 400) {
                toast.error(err.response.data.message);
            } else {
                toast.error('An error occurred while joining the event.');
            }
        }
    };

    const handleJoinByTeam = async () => {
        if (!teamId) {
            toast.error('Please select a team.');
            return;
        }

        if (selectedEvent?.leagues) {
            try {
                const subscription = await axios.get(`${apiUrl}/subscription/${auth?.user?._id}`);
                if (subscription?.data?.active === true) {
                    // Open subscription modal if the user has an active subscription
                    setShowSubscriptionModal(true);
                } else {
                    toast.error('You don\'t have a subscription. Please purchase one.');
                }
            } catch (error) {
                console.error('Error checking subscription:', error);
                toast.error('An error occurred while checking the subscription.');
            }
        } else {
            completeTeamJoin();
        }
    };

    const completeTeamJoin = async () => {
        try {
            if (auth?.user?._id) {
                const res = await axios.post(`${apiUrl}/teamjoin/${selectedEvent._id}`, { teamId, userId: auth?.user?._id });
                if (res?.status === 200 && res?.data?.message) {
                    toast.success(res.data.message);
                    setShowModal(false);
                    setShowSubscriptionModal(false);
                    getEventData();
                } else {
                    toast.error('Failed to join the event with team.');
                }
            }
        } catch (error) {
            console.error('Error joining event with team:', error);
            toast.error('An error occurred while joining the event with team.');
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.post(`${apiUrl}/subscribe`, {
            //     userId: auth?.user?._id,
            //     plan: selectedEvent?.teamFee,
            //     cardDetails,
            // });
            // console.log('Subscription response:', response.data);
            setShowSubscriptionModal(false);
            completeTeamJoin(); // Complete team join after subscribing
        } catch (error) {
            console.error('Error subscribing:', error);
        }
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
                    <EventCard myEventsData={eventData} allEvents={true} JoinEvent={handleJoinEvent} Modal={openModal} />
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
                        Join
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSubscriptionModal} onHide={() => setShowSubscriptionModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Complete your purchase</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>League Fee : {'  '}{selectedEvent && selectedEvent?.teamFee}$</h4>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="cardNumber" className="mb-3">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="cardNumber"
                                value={cardDetails.cardNumber}
                                onChange={handleInputChange}
                                placeholder="Enter card number"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="expiryDate" className="mb-3">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control
                                type="text"
                                name="expiryDate"
                                value={cardDetails.expiryDate}
                                onChange={handleInputChange}
                                placeholder="MM/YY"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="cvv" className="mb-3">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control
                                type="text"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleInputChange}
                                placeholder="CVV"
                                required
                            />
                        </Form.Group>
                        <Button type="submit" variant="warning" className="w-100 fw-bold">
                            Complete Purchase
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowSubscriptionModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Layout>
    );
}
