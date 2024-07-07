import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import apiUrl from '../../api/config';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';

export default function EventSingle() {
    const [auth] = useAuth();
    const navigate = useNavigate();
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(eventId)
    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const res = await axios.get(`${apiUrl}/events/${eventId}`);
                if (res?.data) {
                    setEvent(res.data);
                } else {
                    toast.error('Event not found');
                }
            } catch (error) {
                console.error('Error fetching event:', error);
                toast.error('Error fetching event');
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [eventId]);

    const handleJoinEvent = async () => {
        try {
            const res = await axios.post(`${apiUrl}/events/${eventId}/join`, {}, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            if (res?.data) {
                setEvent(res.data.event);
                toast.success('Successfully joined the event');
            }
        } catch (error) {
            console.error('Error joining event:', error);
            toast.error('Error joining event');
        }
    };

    if (loading) {
        return (
            <Layout>
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            </Layout>
        );
    }

    if (!event) {
        return (
            <Layout>
                <div className="text-center">
                    <p>No data available</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="container-fluid bg-light p-4 md:p-8 lg:p-12">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{event.eventName}</h5>
                            <div className="row">
                                <div className="col-md-4">
                                    <img
                                        src={
                                            'https://media.istockphoto.com/id/1904589046/photo/two-adult-football-players-running-and-kicking-a-soccer-ball-legs-of-two-young-football.jpg?s=2048x2048&w=is&k=20&c=CSTkGc00q6A1VXG8YaHuBbLO58EeHFHkM5uEPoyMYZc='
                                        }
                                        alt="Event Banner"
                                        className="img-fluid rounded"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-6 d-flex align-items-center mb-2">
                                            <i className="bi bi-calendar-fill me-2"></i>
                                            <span>{event.date ? event.date.slice(0, 10) : 'Date not available'}</span>
                                        </div>
                                        <div className="col-6 d-flex align-items-center mb-2">
                                            <i className="bi bi-clock-fill me-2"></i>
                                            <span>{event.time || 'Time not available'}</span>
                                        </div>
                                        <div className="col-6 d-flex align-items-center mb-2">
                                            <i className="bi bi-geo-alt-fill me-2"></i>
                                            <span>{event.place || 'Place not available'}</span>
                                        </div>
                                        <div className="col-6 d-flex align-items-center mb-2">
                                            <i className="bi bi-people-fill me-2"></i>
                                            <span>{event.numTeams ? `${event.numTeams} Teams` : 'Teams not available'}</span>
                                        </div>
                                        <div className="col-6 d-flex align-items-center mb-2">
                                            <i className="bi bi-currency-dollar me-2"></i>
                                            <span>{event.price ? `${event.price} INR` : 'Price not available'}</span>
                                        </div>
                                        <div className="col-6 d-flex align-items-center mb-2">
                                            <i className="bi bi-trophy-fill me-2"></i>
                                            <span>{event.winningPrize ? `${event.winningPrize} INR Prize` : 'Prize not available'}</span>
                                        </div>
                                        <div className="col-12 d-flex align-items-center mb-2">
                                            <i className="bi bi-person-fill me-2"></i>
                                            <span>{`${event.user.firstName} ${event.user.lastName} (${event.user.email})`}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button className="btn btn-primary" onClick={handleJoinEvent}>Join Event</button>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Participants</h5>
                                        <ul>
                                            {event.participants.map(participant => (
                                                <li key={participant._id}>
                                                    {participant.firstName} {participant.lastName} ({participant.email})
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
