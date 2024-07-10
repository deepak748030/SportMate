import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout';
import axios from 'axios';
import apiUrl from '../../api/config';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import Spinner from '../../components/Spinner'

export default function EventDetail() {
    const [auth] = useAuth();
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                if (auth?.user?._id) {
                    const res = await axios.get(`${apiUrl}/events/${auth?.user?._id}`);
                    if (res?.data?.length) {
                        setEvents(res.data);
                    } else {
                        toast.error(res?.data?.message);
                    }
                }
            } catch (error) {
                console.error('Error fetching events:', error);
                // toast.error('Error fetching events');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [auth]);

    if (loading) {
        return (
            <Layout>
                <div className="text-center">
                    <Spinner />
                </div>
            </Layout>
        );
    }

    if (events.length === 0) {
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
                    <h1 className="display-4 text-center mb-4">Event Details</h1>
                    {events.map(event => (
                        <div className="card mb-4" key={event._id}>
                            <div className="card-body" onClick={() => { navigate(`/event/${event._id}`) }} >
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
                                        <div className="row my-3">
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

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
