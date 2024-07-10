import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout';
import axios from 'axios';
import apiUrl from '../../api/config';
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

export default function UserDash() {
    const [auth] = useAuth();
    const [myEventsData, setMyEventsData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (auth?.user?._id) {
                    const eventsResponse = await axios.get(`${apiUrl}/user/${auth?.user?._id}`);
                    setMyEventsData(eventsResponse.data || []);
                }
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchUserData();
    }, [auth]);

    const handleEditEvent = (event) => {
        console.log("Editing event:", event);
    };

    const handleDeleteEvent = async (eventId) => {
        try {
            await axios.delete(`${apiUrl}/events/${eventId}`);
            setMyEventsData(myEventsData.filter(event => event._id !== eventId));
        } catch (error) {
            console.error("Error deleting event", error);
        }
    };

    return (
        <Layout>
            <div className="container-fluid bg-light p-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <div className="row">
                                {myEventsData.length > 0 ? (
                                    myEventsData.map((event) => (
                                        <div className="col-12 col-md-6 mb-4" key={event._id}>
                                            <div className="card h-100">
                                                <img src={'https://media.istockphoto.com/id/1904589046/photo/two-adult-football-players-running-and-kicking-a-soccer-ball-legs-of-two-young-football.jpg?s=2048x2048&w=is&k=20&c=CSTkGc00q6A1VXG8YaHuBbLO58EeHFHkM5uEPoyMYZc='} alt="Event Banner" className="card-img-top" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{event.eventName}</h5>
                                                    <div className="row">
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-calendar-fill me-2"></i>
                                                            <span>{event.date.slice(0, 10)}</span>
                                                        </div>
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-clock-fill me-2"></i>
                                                            <span>{event.time}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-geo-alt-fill me-2"></i>
                                                            <span>{event.place}</span>
                                                        </div>
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-currency-dollar me-2"></i>
                                                            <span>{event.price}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-people-fill me-2"></i>
                                                            <span>{event.participants.length} / {event.numTeams}</span>
                                                        </div>
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-award-fill me-2"></i>
                                                            <span>Prize: {event.winningPrize}</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between mt-2">
                                                        <button className="btn btn-primary" onClick={() => navigate(`/stats/${auth?.user?._id}/${event._id}`)}>View Performance</button>
                                                        {/* <button className="btn btn-danger" onClick={() => handleDeleteEvent(event._id)}>Delete</button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12">
                                        <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                                            <div className="text-center">
                                                <h3 className="fw-bold text-warning">No events joined</h3>
                                                <p>Start your sports journey by joining an event.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <img src={auth?.user?.avatar || 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png'} className="rounded-circle me-3" alt={auth?.user?.firstName} style={{ width: '64px', height: '64px' }} />
                                        <div>
                                            <h5 className="card-title mb-1">{`${auth?.user?.firstName} ${auth?.user?.lastName}`}</h5>
                                            <p className="card-text text-muted">{auth?.user?.job}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex flex-column flex-sm-row justify-content-between">
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="bi bi-envelope-open-fill me-2"></i>
                                            <span>{auth?.user?.email}</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="bi bi-phone-fill me-2"></i>
                                            <span>{auth?.user?.phoneNumber}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Quick Links</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <Link to="/chat" className="text-decoration-none text-muted">
                                                <i className="bi bi-chat-dots-fill me-2"></i>
                                                Chat
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/attendees" className="text-decoration-none text-muted">
                                                <i className="bi bi-people-fill me-2"></i>
                                                Team Performance
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
