import React, { useState, useEffect } from 'react';
import Layout from '../components/layouts/Layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../api/config';
import { useAuth } from '../context/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectFriendsModal from '../components/SelectFriendsModal';

function MyTeams() {
    const [auth] = useAuth();
    const navigate = useNavigate();
    const [teams, setTeams] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentTeamId, setCurrentTeamId] = useState(null);

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
    }, []);

    const handleShowModal = (teamId) => {
        setCurrentTeamId(teamId);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentTeamId(null);
    };

    return (
        <Layout title='SPORTS_MATE - DASHBOARD'>
            <div className='container mt-5'>
                <div className='row'>
                    {/* Left Section */}
                    <div className='col-md-4'>
                        <div className='text-center'>
                            <img src='/logo.png' alt='avatar' style={{ width: '120px', borderRadius: '50%' }} />
                            <h4 className='mt-3 fw-bold'>Welcome Back, {auth?.user?.name || 'User'}!</h4>
                        </div>
                        <hr className='mt-4' />
                    </div>
                    {/* Right Section */}
                    <div className='col-md-8 mt-3'>
                        <div className='d-flex justify-content-between align-items-center mb-4'>
                            <h2 className='fw-bold fs-md-2'>My Teams</h2>
                            <button className='btn btn-outline-warning' onClick={() => navigate('/create-team')}>Create New Team</button>
                        </div>

                        {/* Display Teams */}
                        <div>
                            {teams.length > 0 ? (
                                teams.map(team => (
                                    <div key={team._id} className='card mb-3 shadow-sm'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>{team.teamName}</h5>
                                            <p className='card-text'><strong>Sport:</strong> {team.sport}</p>
                                            <p className='card-text'><strong>Location:</strong> {team.city}, {team.state}</p>
                                            <p className='card-text'><strong>Club:</strong> {team.clubName}</p>
                                            <p className='card-text'><strong>Age Group:</strong> {team.ageGroup}</p>
                                            <p className='card-text'><strong>Gender:</strong> {team.gender}</p>
                                            <button className='btn btn-outline-primary' onClick={() => handleShowModal(team._id)}>Add Friends</button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className='p-4 text-center bg-light rounded'>
                                    <h3 className='fw-bold text-warning'>You haven't created any teams yet!</h3>
                                    <p>Start your sports journey by creating your first team.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <SelectFriendsModal
                show={showModal}
                handleClose={handleCloseModal}
                teamId={currentTeamId}
                fetchTeams={fetchTeams}
            />
        </Layout>
    );
}

export default MyTeams;
