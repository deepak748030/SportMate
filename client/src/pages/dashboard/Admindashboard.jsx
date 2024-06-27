import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout';
import axios from 'axios';
import apiUrl from '../../api/config';
import { toast } from 'react-toastify';

const AdminDashboard = () => {
    const [eventData, setEventData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(true); // State to track loading status for users
    const [loadingEvents, setLoadingEvents] = useState(true); // State to track loading status for events

    // Fetch all users
    const getAllUser = async () => {
        try {
            const res = await axios.get(`${apiUrl}/users`);
            setUserData(res.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoadingUsers(false); // Set loading state to false when done fetching
        }
    };

    // Suspend user
    const suspendUser = async (id) => {
        try {
            const res = await axios.put(`${apiUrl}/users/suspend/${id}`);
            if (res) {
                toast.success('User suspended');
                getAllUser();
            } else {
                toast.error('Error suspending user');
            }
        } catch (error) {
            console.log(error);
            toast.error('Error suspending user');
        }
    }

    // Delete user
    const deleteUser = async (id) => {
        try {
            const res = await axios.delete(`${apiUrl}/userdelete/${id}`);
            if (res) {
                toast.success('User deleted');
                getAllUser();
            } else {
                toast.error('Error deleting user');
            }
        } catch (error) {
            console.log(error);
            toast.error('Error deleting user');
        }
    }

    // Fetch sports events
    const getEventData = async () => {
        try {
            const res = await axios.get(`${apiUrl}/events`);
            if (res?.data) {
                setEventData(res?.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingEvents(false); // Set loading state to false when done fetching
        }
    }

    // Accept event
    const acceptEvent = async (id) => {
        try {
            const res = await axios.put(`${apiUrl}/events/${id}`);
            if (res) {
                toast.success('Event accepted');
                getEventData();
            } else {
                toast.error('Error accepting event');
            }
        } catch (error) {
            console.log(error);
            toast.error('Error accepting event');
        }
    }

    // Delete event
    const deleteEvent = async (id) => {
        try {
            const res = await axios.delete(`${apiUrl}/events/${id}`);
            if (res) {
                toast.success('Event deleted');
                getEventData();
            } else {
                toast.error('Error deleting event');
            }
        } catch (error) {
            console.log(error);
            toast.error('Error deleting event');
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoadingUsers(true); // Set loading state for users
            setLoadingEvents(true); // Set loading state for events
            await getEventData();
            await getAllUser();
            setLoadingUsers(false);
            setLoadingEvents(false);
        };
        fetchData();
    }, []);

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
                    {loadingUsers ? (
                        <tr>
                            <td colSpan="5" className="text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </td>
                        </tr>
                    ) : (
                        userData.map((user, index) => (
                            <tr key={index}>
                                <td className="align-middle">{`${user.firstName} ${user.lastName}`}</td>
                                <td className="align-middle">{user.role}</td>
                                <td className="align-middle">{user.email}</td>
                                <td className="align-middle">{user.phoneNumber}</td>
                                <td className="align-middle">
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => deleteUser(user?._id)}>Delete</button>
                                    <button className="btn btn-outline-warning btn-sm ms-1" onClick={() => suspendUser(user?._id)}>Suspend</button>
                                </td>
                            </tr>
                        ))
                    )}
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
                    {loadingEvents ? (
                        <tr>
                            <td colSpan="5" className="text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </td>
                        </tr>
                    ) : (
                        eventData.map((event, index) => (
                            <tr key={event?._id}>
                                <td>{index + 1}</td>
                                <td>{event?.eventName}</td>
                                <td>{event?.date?.slice(0, 10)}</td>
                                <td>{event?.user?.firstName}</td>
                                <td>
                                    <button className="btn btn-success btn-sm" onClick={() => acceptEvent(event?._id)}>Approve</button>{' '}
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteEvent(event?._id)}>Decline</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );

    return (
        <Layout>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="mb-3">Users</h2>
                        {renderUsersTable()}
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                        <h2 className="mb-3">Sports Events</h2>
                        {renderSportsEvents()}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
