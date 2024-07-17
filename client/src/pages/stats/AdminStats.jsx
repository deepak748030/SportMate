import React, { useEffect, useState } from 'react';
import EventCard from '../../components/card/EventCard';
import axios from 'axios';
import apiUrl from '../../api/config';
import Layout from '../../components/layouts/Layout';

function AdminStats() {
    const [eventData, setEventData] = useState([]);
    const [loadingEvents, setLoadingEvents] = useState(true);

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

    return (
        <Layout>
            <div className='container border'>
                <h2 className='text text-center my-4 text-danger'>STATS</h2>
                {loadingEvents ? (
                    <div className="d-flex justify-content-center align-item-center mt-4" >
                        <div className="spinner-border my-4" role="status">

                        </div>
                    </div>
                ) : (
                    <EventCard myEventsData={eventData} stats={true} />
                )}
            </div>
        </Layout>
    );
}

export default AdminStats;
