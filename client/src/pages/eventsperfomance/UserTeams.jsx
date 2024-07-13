import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout';
import axios from 'axios';
import apiUrl from '../../api/config';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import Spinner from '../../components/Spinner';

const UserTeams = () => {
    const [auth] = useAuth();
    const navigate = useNavigate();
    const { eventId } = useParams();
    const [participants, setParticipants] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const res = await axios.get(`${apiUrl}/events/single/${eventId}`);
                if (res.data) {
                    // Filter participants based on the authenticated user's ID and remove duplicates
                    const uniqueParticipants = Array.from(
                        new Set(res.data.joinedteams
                            .filter(participant => participant.user === auth?.user?._id)
                            .map(participant => participant._id)
                        )
                    ).map(id =>
                        res.data.joinedteams.find(participant => participant._id === id)
                    );

                    setParticipants(uniqueParticipants);
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

        if (eventId) {
            fetchEvent();
        }
    }, [eventId, auth]);



    if (loading) {
        return (
            <Layout>
                <div className="text-center">
                    <Spinner />
                </div>
            </Layout>
        );
    }

    if (!participants || participants.length === 0) {
        return (
            <Layout>
                <div className="container-fluid bg-light p-4 md:p-8 lg:p-12">
                    <div className="container">
                        <div className="card">
                            <div className="card-body d-flex justify-content-center align-items-center" style={{ minHeight: '86vh' }}>
                                <div>
                                    <h1 className="text-warning">No participants found for this event.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            <h5 className="mt-4">Event Teams Participants</h5>
                            <div className="row">
                                {participants.map(participant => (
                                    <div key={participant._id} className="col-md-4 mb-3">
                                        <div className="card h-100">
                                            <img
                                                src={'https://media.istockphoto.com/id/1904589046/photo/two-adult-football-players-running-and-kicking-a-soccer-ball-legs-of-two-young-football.jpg?s=2048x2048&w=is&k=20&c=CSTkGc00q6A1VXG8YaHuBbLO58EeHFHkM5uEPoyMYZc=' || "https://via.placeholder.com/150"}
                                                alt="User"
                                                className="card-img-top"
                                                style={{ height: '230px', objectFit: 'cover' }}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {participant.teamName} - {participant.clubName}
                                                </h5>
                                                <p className="card-text">
                                                    <i className="bi bi-person-fill me-2"></i>
                                                    {participant.gender}, {participant.ageGroup}
                                                </p>
                                                <p className="card-text">
                                                    <i className="bi bi-geo-alt-fill me-2"></i>
                                                    {participant.city}, {participant.state}
                                                </p>
                                                <div className='d-flex'>
                                                    <button
                                                        className="btn btn-primary"
                                                        onClick={() => navigate(`/stats/${participant._id}/${eventId}`)}
                                                    >
                                                        View Stats
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default UserTeams;
