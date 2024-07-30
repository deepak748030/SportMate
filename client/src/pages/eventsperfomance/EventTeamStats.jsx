import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import apiUrl from '../../api/config';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import Spinner from '../../components/Spinner';

const EventTeamStats = () => {
    const [auth] = useAuth();
    const navigate = useNavigate();
    const { eventId } = useParams();
    const [participants, setParticipants] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedParticipant, setSelectedParticipant] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [formData, setFormData] = useState({
        attack: { kills: 0, errors: 0, totalAttacks: 0, hittingPercentage: 0 },
        setting: { assists: 0, ballHandlingErrors: 0 },
        serving: { serviceAces: 0, serveAttempts: 0 },
        passing: { receptionErrors: 0, receptionAttempts: 0 },
        defense: { digs: 0 },
        blocking: { blockSolos: 0, blockAssists: 0, blockingErrors: 0 },
        misc: { points: 0 }
    });

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const res = await axios.get(`${apiUrl}/events/single/${eventId}`);
                if (res.data) {
                    setParticipants(res.data.joinedteams);
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
    }, [eventId]);

    const handleOpenModal = (participant) => {
        setSelectedParticipant(participant);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleStatChange = (e) => {
        const { name, value } = e.target;
        const [category, statField] = name.split('.');

        setFormData({
            ...formData,
            [category]: {
                ...formData[category],
                [statField]: parseInt(value)
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (auth?.user?._id) {
                const res = await axios.post(`${apiUrl}/stats/record`, {
                    playerId: selectedParticipant._id,
                    eventId,
                    stats: formData
                });

                toast.success('Stats recorded successfully');
                handleCloseModal();
            }
        } catch (error) {
            console.error('Error saving stats:', error);
            toast.error('Error saving stats');
        }
    };

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
                            <h3 className="my-4 text text-danger">Event Teams Participants</h3>
                            <div className="row">
                                {participants.map(participant => (
                                    <div key={participant._id} className="col-md-4 mb-3">
                                        <div className="card h-100">
                                            <img
                                                src={'https://plus.unsplash.com/premium_photo-1661963404614-74802f16a7a0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' || "https://via.placeholder.com/150"}
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
                                                        onClick={() => handleOpenModal(participant)}
                                                    >
                                                        Fill Stats
                                                    </button>
                                                    <button
                                                        className="btn btn-primary mx-2"
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

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Team Statistics</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="kills" className="form-label">Kills</label>
                            <input
                                type="number"
                                className="form-control"
                                id="kills"
                                name="attack.kills"
                                value={formData.attack.kills}
                                onChange={handleStatChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="errors" className="form-label">Errors</label>
                            <input
                                type="number"
                                className="form-control"
                                id="errors"
                                name="attack.errors"
                                value={formData.attack.errors}
                                onChange={handleStatChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="totalAttacks" className="form-label">Total Attacks</label>
                            <input
                                type="number"
                                className="form-control"
                                id="totalAttacks"
                                name="attack.totalAttacks"
                                value={formData.attack.totalAttacks}
                                onChange={handleStatChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hittingPercentage" className="form-label">Hitting Percentage</label>
                            <input
                                type="number"
                                className="form-control"
                                id="hittingPercentage"
                                name="attack.hittingPercentage"
                                value={formData.attack.hittingPercentage}
                                onChange={handleStatChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="assists" className="form-label">Assists</label>
                            <input
                                type="number"
                                className="form-control"
                                id="assists"
                                name="setting.assists"
                                value={formData.setting.assists}
                                onChange={handleStatChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ballHandlingErrors" className="form-label">Ball Handling Errors</label>
                            <input
                                type="number"
                                className="form-control"
                                id="ballHandlingErrors"
                                name="setting.ballHandlingErrors"
                                value={formData.setting.ballHandlingErrors}
                                onChange={handleStatChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="serviceAces" className="form-label">Service Aces</label>
                            <input
                                type="number"
                                className="form-control"
                                id="serviceAces"
                                name="serving.serviceAces"
                                value={formData.serving.serviceAces}
                                onChange={handleStatChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="serveAttempts" className="form-label">Serve Attempts</label>
                            <input
                                type="number"
                                className="form-control"
                                id="serveAttempts"
                                name="serving.serveAttempts"
                                value={formData.serving.serveAttempts}
                                onChange={handleStatChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="receptionErrors" className="form-label">Reception Errors</label>
                            <input
                                type="number"
                                className="form-control"
                                id="receptionErrors"
                                name="passing.receptionErrors"
                                value={formData.passing.receptionErrors}
                                onChange={handleStatChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="receptionAttempts" className="form-label">Reception Attempts</label>
                            <input
                                type="number"
                                className="form-control"
                                id="receptionAttempts"
                                name="passing.receptionAttempts"
                                value={formData.passing.receptionAttempts}
                                onChange={handleStatChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="digs" className="form-label">Digs</label>
                            <input
                                type="number"
                                className="form-control"
                                id="digs"
                                name="defense.digs"
                                value={formData.defense.digs}
                                onChange={handleStatChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="blockSolos" className="form-label">Block Solos</label>
                            <input
                                type="number"
                                className="form-control"
                                id="blockSolos"
                                name="blocking.blockSolos"
                                value={formData.blocking.blockSolos}
                                onChange={handleStatChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="blockAssists" className="form-label">Block Assists</label>
                            <input
                                type="number"
                                className="form-control"
                                id="blockAssists"
                                name="blocking.blockAssists"
                                value={formData.blocking.blockAssists}
                                onChange={handleStatChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="blockingErrors" className="form-label">Blocking Errors</label>
                            <input
                                type="number"
                                className="form-control"
                                id="blockingErrors"
                                name="blocking.blockingErrors"
                                value={formData.blocking.blockingErrors}
                                onChange={handleStatChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="points" className="form-label">Points</label>
                            <input
                                type="number"
                                className="form-control"
                                id="points"
                                name="misc.points"
                                value={formData.misc.points}
                                onChange={handleStatChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </Layout>
    );
};

export default EventTeamStats;
