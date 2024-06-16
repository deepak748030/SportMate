import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layouts/Layout'
const AdminDashboard = () => {
    // Sample data for users
    const userData = [
        {
            name: 'Robert Wolfkisser',
            job: 'Engineer',
            email: 'rob_wolf@gmail.com',
            phone: '+44 (452) 886 09 12',
        },
        // ... more users
    ];

    // Sample data for sports events
    const eventData = [
        {
            id: 1,
            event: 'Football Match',
            date: '2023-06-01',
        },
        // ... more events
    ];

    const renderUsersTable = () => (

        <div className="table-responsive">
            <table className="table table-hover table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Employee</th>
                        <th>Job Title</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, index) => (
                        <tr key={index}>
                            <td className="align-middle">{user.name}</td>
                            <td className="align-middle">{user.job}</td>
                            <td className="align-middle">{user.email}</td>
                            <td className="align-middle">{user.phone}</td>
                            <td className="align-middle">
                                <button className="btn btn-outline-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderSportsEvents = () => (
        <div className="table-responsive">
            <table className="table table-hover table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {eventData.map((event, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{event.event}</td>
                            <td>{event.date}</td>
                            <td>
                                <button className="btn btn-success btn-sm">Approve</button>{' '}
                                <button className="btn btn-danger btn-sm">Decline</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderUserCards = () => (
        <div className="row">
            {userData.map((user, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text">{user.job}</p>
                            <p className="card-text">{user.email}</p>
                            <p className="card-text">{user.phone}</p>
                            <button className="btn btn-outline-danger btn-sm">Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderEventCards = () => (
        <div className="row">
            {eventData.map((event, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{event.event}</h5>
                            <p className="card-text">{event.date}</p>
                            <button className="btn btn-success btn-sm">Approve</button>{' '}
                            <button className="btn btn-danger btn-sm">Decline</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <Layout>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="mb-4">Users</h2>
                        {/* Render either table or cards based on screen size */}
                        <div className="d-none d-md-block">
                            {renderUsersTable()}
                        </div>
                        <div className="d-md-none">
                            {renderUserCards()}
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <h2 className="mb-4">Sports Events</h2>
                        {/* Render either table or cards based on screen size */}
                        <div className="d-none d-md-block">
                            {renderSportsEvents()}
                        </div>
                        <div className="d-md-none">
                            {renderEventCards()}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
