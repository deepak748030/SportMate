import React, { useState, useEffect } from 'react';
import Layout from '../components/layouts/Layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../api/config'

function Users() {
    const navigate = useNavigate();
    const [teams, setTeams] = useState([]);



    const fetchTeams = async () => {
        try {
            const response = await axios.get(`${apiUrl}/teams`); // Replace with your actual API endpoint
            setTeams(response.data);
        } catch (error) {
            console.error('Error fetching teams:', error);
        }
    };

    useEffect(() => {
        fetchTeams();
    }, []);

    return (
        <Layout title='SPORTS_MATE - DASHBOARD'>
            <div className='container mt-md-5 mb-5 mb-md-1'>
                <div className='row m-3'>
                    {/* Left Section */}
                    <div className='col-md-4'>
                        <div className='text-center'>
                            <img src='/logo.png' alt='avatar' style={{ width: '120px', borderRadius: '50%' }} />
                            <h4 className='mt-3 fw-bold'>Welcome Back, John!</h4>
                        </div>
                        <hr className='mt-4' />
                        <div>
                            <h5 className='mt-4'>Upcoming Events</h5>
                            <p>No upcoming events scheduled.</p>
                        </div>
                        <hr />
                    </div>
                    {/* Right Section */}
                    <div className='col-md-8 col-12 mt-3'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2 className='fw-bold fs-md-2'>My Teams</h2>
                            <button className='btn btn-outline-warning' onClick={() => navigate('/create-team')}>Create New Team</button>
                        </div>

                        {/* Display Teams */}
                        <div className='mt-4'>
                            {teams.length > 0 ? (
                                teams.map(team => (
                                    <div key={team._id} className='card mb-3'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>{team.teamName}</h5>
                                            <p className='card-text'>{team.sport}</p>
                                            <p className='card-text'>{team.city}, {team.state}</p>
                                            {/* Add more details as needed */}
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
        </Layout>
    );
}

export default Users;
