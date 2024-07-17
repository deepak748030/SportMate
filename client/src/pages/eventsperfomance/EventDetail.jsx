import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout';
import axios from 'axios';
import apiUrl from '../../api/config';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import EventCard from '../../components/card/EventCard';

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
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="display-4 text-center mb-4">Event Details</h1>
                            <EventCard myEventsData={events} stats={true} />
                        </div>
                        <div className="col-lg-4">
                            <h5 className="mb-3">Performance</h5>
                            <ul className="list-group mb-4">
                                <li className="list-group-item">
                                    <Link
                                        // to={'/team-performance'} 
                                        style={{ textDecoration: 'none', color: 'black' }} >
                                        Team Performance
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link
                                        // to={'/user-performance'}
                                        style={{ textDecoration: 'none', color: 'black' }} >
                                        User Performance
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
