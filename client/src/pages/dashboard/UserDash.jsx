import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout';
import axios from 'axios';
import apiUrl from '../../api/config';
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import EventCard from "../../components/card/EventCard";

export default function UserDash() {
    const [auth] = useAuth();
    const [myEventsData, setMyEventsData] = useState([]);
    const [teams, setTeams] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (auth?.user?._id) {
                    const eventsResponse = await axios.get(`${apiUrl}/user/${auth?.user?._id}`);

                    setMyEventsData(eventsResponse.data.joinedEvents || []);

                    // Filter out duplicates based on teamsJoined._id
                    const uniqueTeams = Array.from(
                        new Set(eventsResponse.data.teamsJoined.map(team => team._id))
                    ).map(id =>
                        eventsResponse.data.teamsJoined.find(team => team._id === id)
                    );

                    setTeams(uniqueTeams);
                }
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchUserData();
    }, [auth]);



    return (
        <Layout>
            <div className="container-fluid bg-light p-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <div className="row m-2">
                                <h2 >Events Joined By User</h2>
                                {myEventsData.length > 0 ? (
                                    <EventCard myEventsData={myEventsData} userDash={true} />


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


                                <h2>Events Joined By Teams</h2>
                                {teams?.length > 0 ? (
                                    <EventCard myEventsData={teams} teamDash={true} />

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
