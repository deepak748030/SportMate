import React from 'react';
import Layout from '../components/layouts/Layout';
import { useNavigate } from 'react-router-dom';

function Users() {
    const navigate = useNavigate();

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
                            <button className='btn btn-outline-warning' onClick={() => navigate('/user/createteam')}>Create New Team</button>
                        </div>
                        <div className='mt-4 p-4 text-center bg-light rounded'>
                            <h3 className='fw-bold text-warning'>You haven't created any teams yet!</h3>
                            <p>Start your sports journey by creating your first team.</p>
                        </div>
                        <div className='mt-4'>
                            <h2 className='fw-bold'>Activity</h2>
                            <p>No recent activity to display.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Users;
