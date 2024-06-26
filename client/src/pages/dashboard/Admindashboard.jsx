import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout'
import axios from 'axios';
import apiUrl from '../../api/config';
import { toast } from 'react-toastify';

const AdminDashboard = () => {

    const [eventData, setEventData] = useState([])
    const [userData, setUserData] = useState([]);


    // users all
    const getAllUser = async () => {
        try {
            const res = await axios.get(`${apiUrl}/users`);
            setUserData(res.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const suspendUser = async (id) => {
        try {
            const res = await axios.put(`${apiUrl}/`);
            if (res) {
                toast.success('accepted')
                getAllUser()
            } else {
                toast.success('error')
            }

        } catch (error) {
            console.log(error)
        }
    }

    const deleteUser = async (id) => {
        try {
            const res = await axios.delete(`${apiUrl}/userdelete/${id}`);
            if (res) {
                toast.success('deleted')
                getAllUser()
            } else {
                toast.success('error')
            }

        } catch (error) {
            console.log(error)
        }
    }

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

    // sports events

    const getEventData = async () => {
        try {
            const res = await axios.get(`${apiUrl}/events`);
            // console.log('res:', res)
            if (res?.data) {
                await setEventData(res?.data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const acceptEvent = async (id) => {
        try {
            const res = await axios.put(`${apiUrl}/events/${id}`);
            if (res) {
                toast.success('accepted')
                getEventData()
            } else {
                toast.success('error')
            }

        } catch (error) {
            console.log(error)
        }
    }

    const deleteEvent = async (id) => {
        try {
            const res = await axios.delete(`${apiUrl}/events/${id}`);
            if (res) {
                toast.success('deleted')
                getEventData()
            } else {
                toast.success('error')
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getEventData()
        getAllUser()
    }, [])

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
                            <td className="align-middle">{`${user.firstName} ${user.lastName}`}</td>
                            <td className="align-middle">{user.role}</td>
                            <td className="align-middle">{user.email}</td>
                            <td className="align-middle">{user.phoneNumber}</td>
                            <td className="align-middle">
                                <button className="btn btn-outline-danger btn-sm" onClick={() => { deleteUser(user?._id) }} >Delete</button>
                                <button className="btn btn-outline-warning btn-sm ms-1" onClick={() => { suspendUser(user?._id) }} >Suspend</button>
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
                    {eventData?.map((event, index) => (
                        <tr key={event?._id}>
                            <td>{index + 1}</td>
                            <td>{event?.eventName}</td>
                            <td>{event?.date.slice(0, 10)}</td>
                            <td>{event?.user?.firstName}</td>
                            <td>
                                <button className="btn btn-success btn-sm" onClick={() => { acceptEvent(event?._id) }}>Approve</button>{' '}
                                <button className="btn btn-danger btn-sm" onClick={() => { deleteEvent(event?._id) }}>Decline</button>
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
                        {/* <h2 className="mb-3">Organizers</h2> */}
                        {/* Render either table or cards based on screen size */}
                        <div className="d-none d-md-block">
                            {/* {renderOrganizerTable()} */}
                        </div>
                        <div className="d-md-none">
                            {/* {renderOrganizerCards()} */}
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
