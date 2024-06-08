import React from 'react';
import Layout from '../components/layouts/Layout';

// Main component for Admin Dashboard
function AdminDashboard() {
    // Sample data for users
    const userData = [
        {
            avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
            name: 'Robert Wolfkisser',
            job: 'Engineer',
            email: 'rob_wolf@gmail.com',
            phone: '+44 (452) 886 09 12',
        },
        {
            avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
            name: 'Robert Wolfkisser',
            job: 'Engineer',
            email: 'rob_wolf@gmail.com',
            phone: '+44 (452) 886 09 12',
        },
        {
            avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
            name: 'Robert Wolfkisser',
            job: 'Engineer',
            email: 'rob_wolf@gmail.com',
            phone: '+44 (452) 886 09 12',
        },
        {
            avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
            name: 'Robert Wolfkisser',
            job: 'Engineer',
            email: 'rob_wolf@gmail.com',
            phone: '+44 (452) 886 09 12',
        },
        {
            avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
            name: 'Robert Wolfkisser',
            job: 'Engineer',
            email: 'rob_wolf@gmail.com',
            phone: '+44 (452) 886 09 12',
        },
        {
            avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
            name: 'Robert Wolfkisser',
            job: 'Engineer',
            email: 'rob_wolf@gmail.com',
            phone: '+44 (452) 886 09 12',
        },
        // Add more user data objects as needed
    ];

    // Sample data for sports events
    const eventData = [
        {
            id: 1,
            event: 'Football Match',
            date: '2023-06-01',
        },
        {
            id: 1,
            event: 'Football Match',
            date: '2023-06-01',
        },
        {
            id: 1,
            event: 'Football Match',
            date: '2023-06-01',
        },
        {
            id: 1,
            event: 'Football Match',
            date: '2023-06-01',
        },
        {
            id: 1,
            event: 'Football Match',
            date: '2023-06-01',
        },
        // Add more event data objects as needed
    ];

    // Component for rendering the users table
    const renderUsersTable = () => (
        <div className="row mt-4">
            <div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Job title</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Add user rows here */}
                        {userData.map((user, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={user.avatar} alt={user.name} style={{ width: '30px', borderRadius: '50%' }} /> {user.name}
                                </td>
                                <td>{user.job}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    // Component for rendering the sports events table
    const renderSportsEvents = () => (
        <div className="row mt-4">
            <div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Event</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Add event rows here */}
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
        </div>
    );

    return (
        <Layout title='ADMIN-DASHBOARD'>

            {/* Main content */}
            <div className="container mt-4">
                {/* Users table */}
                {renderUsersTable()}

                {/* Sports Events table */}
                {renderSportsEvents()}
            </div>
        </Layout>
    );
}

export default AdminDashboard;
