// components/PerformanceReport.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../../api/config';
import { toast } from 'react-toastify';
import { Bar } from 'react-chartjs-2';

const PerformanceReport = ({ playerId, eventId }) => {
    const [stats, setStats] = useState(null);

    const fetchStats = async () => {
        try {
            const res = await axios.get(`${apiUrl}/stats/${playerId}/${eventId}`);
            if (res?.data) {
                setStats(res.data);
            }
        } catch (error) {
            console.error('Error fetching stats:', error);
            toast.error('Failed to fetch stats');
        }
    };

    useEffect(() => {
        fetchStats();
    }, [playerId, eventId]);

    if (!stats) {
        return <div>Loading...</div>;
    }

    const data = {
        labels: ['Attack', 'Setting', 'Serving', 'Passing', 'Defense', 'Blocking', 'Misc'],
        datasets: [
            {
                label: 'Performance',
                data: [
                    stats.attack.kills,
                    stats.setting.assists,
                    stats.serving.serviceAces,
                    stats.passing.receptionErrors,
                    stats.defense.digs,
                    stats.blocking.blockSolos,
                    stats.misc.points
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };

    return (
        <div>
            <h5>Performance Report</h5>
            <Bar data={data} />
        </div>
    );
};

export default PerformanceReport;
