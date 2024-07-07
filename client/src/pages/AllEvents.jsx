import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layouts/Layout';
import apiUrl from '../api/config';
import { useAuth } from "../context/auth";

export default function AllEvents() {

    const [auth] = useAuth();
    const [eventData, setEventData] = useState([]);
    const [loadingEvents, setLoadingEvents] = useState(true);

    // Fetch sports events
    const getEventData = async () => {
        try {
            const res = await axios.get(`${apiUrl}/approvedevents`);
            if (res?.data) {
                setEventData(res?.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingEvents(false); // Set loading state to false when done fetching
        }
    };

    useEffect(() => {
        getEventData();
    }, []);

    const handleEditEvent = (event) => {
        // Handle event edit logic here
        console.log("Editing event:", event);
    };

    const handleJoinEvent = async (event) => {
        const userId = "your-user-id"; // Replace with the actual user ID
        try {
            const res = await axios.post(`${apiUrl}/users/${auth?.user?._id}/join/${event._id}`);
            if (res?.data) {
                toast.success('Joined event successfully');
                getEventData();
            } else {
                toast.error('Error joining event');
            }
        } catch (error) {
            console.error(error);
            toast.error('Error joining event');
        }
    };

    if (loadingEvents) {
        return <div>Loading events...</div>;
    }

    return (
        <Layout>
            <div className="container-fluid bg-light p-4 md:p-8 lg:p-12">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12 mb-4">
                            {eventData.length === 0 ? (
                                <div className="text-center">
                                    <h5>No events available at the moment</h5>
                                </div>
                            ) : (
                                eventData.map(({ _id, date, eventName, numTeams, place, price, time, user, winningPrize }) => (
                                    <div className="card mb-4" key={_id} onClick={() => handleEditEvent({ _id, eventName, place, date, time, price, numTeams, user, winningPrize })}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                {/* Use a placeholder image or actual event image */}
                                                <img src={'https://via.placeholder.com/1200x800'} alt="Event Banner" className="img-fluid rounded mt-2" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{eventName}</h5>
                                                    <div className="row">
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-calendar-fill me-2"></i>
                                                            <span>{date.slice(0, 10)}</span>
                                                        </div>
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-clock-fill me-2"></i>
                                                            <span>{time}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-geo-alt-fill me-2"></i>
                                                            <span>{place}</span>
                                                        </div>
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-currency-dollar me-2"></i>
                                                            <span>{price}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-people-fill me-2"></i>
                                                            <span>{numTeams} / {numTeams}</span>
                                                        </div>
                                                        <div className="col-6 d-flex align-items-center mb-2">
                                                            <i className="bi bi-person-fill me-2"></i>
                                                            <span>{user?.firstName}</span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3">
                                                        <button onClick={() => handleJoinEvent({ _id, eventName })} className="btn btn-warning me-2">
                                                            Join Event
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        {/* Removed Quick Links section */}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
