import React from 'react';
import Layout from '../components/layouts/Layout';

function Users() {
    return (
        <Layout title='SPORTS_MATE - DASHBOARD'>
            <div className='container mt-md-5 ' style={{ minHeight: '53rem' }}  >
                <div className='row m-3'>
                    {/* Left Section */}
                    <div className='col-md-4 '>
                        <div className='d-flex align-items-center '>
                            <p className='fw-bold bg-success px-3 py-2 rounded mt-3 mx-2'>S</p>
                            <div className='d-md-flex flex-column align-items-center'>
                                <div className='fw-bold '>DEEPAK KUMAR</div>
                                <div >EDIT ACCOUNT</div>
                            </div>
                        </div>
                        <hr />

                        <div className='d-md-block'>
                            <h5 className='mt-5 fw-bold'>UPCOMING EVENTS (0)</h5>
                            <p className='mt-5' >No events scheduled for any teams.</p>
                        </div>
                        <hr />
                    </div>
                    {/* Right Section */}
                    <div className='col-md-8 col-12 mt-3'>
                        <div className='d-flex justify-content-between'>
                            <h2 className='fw-bold fs-md-2'>MY TEAMS</h2>
                            <button className='btn btn-success'>Create new team</button>
                        </div>
                        <div className='d-flex flex-column h-100 my-5 align-items-center justify-content-center' style={{
                            border: '.2px dashed black',
                            opacity: '.4'
                        }}>
                            <h3 className='fw-bold' >TEAMS EMPTY</h3>
                            Create new team
                        </div>

                        <div>

                            <h2 className='my-4 fw-bold'>ACTIVITY</h2>
                            <p>There is no recent activity</p>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Users;
