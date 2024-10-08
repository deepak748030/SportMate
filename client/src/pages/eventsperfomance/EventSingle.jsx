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
// No participants found for this event.
const EventSingle = () => {
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
                    setParticipants(res.data.participants);
                    console.log(res.data)
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

    // Handle opening the modal and setting the selected participant
    const handleOpenModal = (participant) => {
        setSelectedParticipant(participant);
        setShowModal(true);
    };

    // Handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Handle statistics input changes
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

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (auth?.user?._id) {
                const res = await axios.post(`${apiUrl}/stats/record`, {
                    playerId: selectedParticipant._id,
                    eventId,
                    stats: formData
                });

                console.log(res.data);
                toast.success('Stats recorded successfully');
                handleCloseModal(); // Close modal after successful submission or navigate to another page
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
                                <div >
                                    <h1 className="text-warning ">No participants found for this event.</h1>
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
                            <h5 className="mt-4">Event Users Participants</h5>
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
                                                    {participant.firstName} {participant.lastName}
                                                </h5>
                                                <p className="card-text">
                                                    <i className="bi bi-envelope-fill me-2"></i>
                                                    {participant.email}
                                                </p>
                                                <p className="card-text">
                                                    <i className="bi bi-phone-fill me-2"></i>
                                                    {participant.phoneNumber}
                                                </p>
                                                <div className='d-flex'>
                                                    <button
                                                        className="btn btn-primary "
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

            {/* Modal for editing participant data */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Player Statistics</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        {/* Attacks Statistics */}
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

                        {/* Setting Statistics */}
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

                        {/* Serving Statistics */}
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

                        {/* Passing Statistics */}
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

                        {/* Defense Statistics */}
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

                        {/* Blocking Statistics */}
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

                        {/* Misc. Statistics */}
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

                        <button type="submit" className="btn btn-primary">Save Statistics</button>
                    </form>
                </Modal.Body>
            </Modal>
        </Layout>
    );
};

export default EventSingle;
