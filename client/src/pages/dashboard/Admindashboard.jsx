import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout'
const AdminDashboard = () => {
    // Sample data for users
    const userData = [
        {
            name: 'Robert Wolfkisser',
            job: 'Engineer',
            email: 'rob_wolf@gmail.com',
            phone: '+44 (452) 886 09 12',
        },
        {
            name: 'John Doe',
            job: 'Engineer',
            email: 'doe_@gmail.com',
            phone: '+44 (452) 886 09 12',
        },
        {
            name: 'Mae Frank',
            job: 'Engineer',
            email: 'ma_fr@gmail.com',
            phone: '+44 (452) 886 09 12',
        },
        // ... more users
    ];
    const organizerData = [
        {
            name: 'John Doe',
            email: 'rob_wolf@gmail.com',
            phone: '+44 (452) 886 09 12',
        },
        {
            name: 'Frank Doe',
            email: 'doe_@gmail.com',
            phone: '+44 (452) 886 09 12',
        },
        {
            name: 'Mae Doe',
            email: 'ma_fr@gmail.com',
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
            organizer: 'Prat Foe',
        },
        {
            id: 2,
            event: 'Football Match',
            date: '2023-08-01',
            organizer: 'Rank Drn',
        },
        {
            id: 3,
            event: 'Football Match',
            date: '2023-07-01',
            organizer: 'Frank Doe',
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
                                <button className="btn btn-outline-warning btn-sm ms-1">Suspend</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    const renderOrganizerTable = () => (

        <div className="table-responsive">
            <table className="table table-hover table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {organizerData.map((user, index) => (
                        <tr key={index}>
                            <td className="align-middle">{user.name}</td>
                            <td className="align-middle">{user.email}</td>
                            <td className="align-middle">{user.phone}</td>
                            <td className="align-middle">
                                <button className="btn btn-outline-danger btn-sm">Delete</button>
                                <button className="btn btn-outline-warning btn-sm ms-1">Suspend</button>
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
                        <th>Organizer</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {eventData.map((event, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{event.event}</td>
                            <td>{event.date}</td>
                            <td>{event.organizer}</td>
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
                            <button className="btn btn-outline-warning btn-sm ms-1">Suspend</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
    const renderOrganizerCards = () => (
        <div className="row">
            {organizerData.map((user, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text">{user.email}</p>
                            <p className="card-text">{user.phone}</p>
                            <button className="btn btn-outline-danger btn-sm">Delete</button>
                            <button className="btn btn-outline-warning btn-sm ms-1">Suspend</button>
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
                        <h2 className="mb-3">Users</h2>
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
                        <h2 className="mb-3">Organizers</h2>
                        {/* Render either table or cards based on screen size */}
                        <div className="d-none d-md-block">
                            {renderOrganizerTable()}
                        </div>
                        <div className="d-md-none">
                            {renderOrganizerCards()}
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <h2 className="mb-3">Sports Events</h2>
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
