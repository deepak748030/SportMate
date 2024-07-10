import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiUrl from '../api/config';
import Layout from '../components/layouts/Layout';
import Spinner from '../components/Spinner'

const Stats = () => {
    const { playerId, eventId } = useParams();
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchStats = async () => {
        try {
            const res = await axios.get(`${apiUrl}/stats/${playerId}/${eventId}`);
            setStats(res?.data);
        } catch (error) {
            console.error('Error fetching stats:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    if (!stats || Object.keys(stats).length === 0) {
        return (
            <Layout>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <div className="text-center">
                        <h3 className="fw-bold text-warning">No event data performance found</h3>
                        <p>Start your sports journey by joining an event.</p>
                    </div>
                </div>
            </Layout>
        );
    }

    // Prepare data for charts
    const attackData = {
        labels: ['Kills', 'Errors', 'Total Attacks', 'Hitting Percentage'],
        datasets: [{
            label: 'Attack',
            data: [
                stats.attack.kills,
                stats.attack.errors,
                stats.attack.totalAttacks,
                stats.attack.hittingPercentage
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }]
    };

    const settingData = {
        labels: ['Assists', 'Ball Handling Errors'],
        datasets: [{
            label: 'Setting',
            data: [
                stats.setting.assists,
                stats.setting.ballHandlingErrors
            ],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
        }]
    };

    const servingData = {
        labels: ['Service Aces', 'Serve Attempts'],
        datasets: [{
            label: 'Serving',
            data: [
                stats.serving.serviceAces,
                stats.serving.serveAttempts
            ],
            backgroundColor: 'rgba(255, 159, 64, 0.6)',
        }]
    };

    const passingData = {
        labels: ['Reception Errors', 'Reception Attempts'],
        datasets: [{
            label: 'Passing',
            data: [
                stats.passing.receptionErrors,
                stats.passing.receptionAttempts
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
        }]
    };

    const defenseData = {
        labels: ['Digs'],
        datasets: [{
            label: 'Defense',
            data: [
                stats.defense.digs
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
        }]
    };

    const blockingData = {
        labels: ['Block Solos', 'Block Assists', 'Blocking Errors'],
        datasets: [{
            label: 'Blocking',
            data: [
                stats.blocking.blockSolos,
                stats.blocking.blockAssists,
                stats.blocking.blockingErrors
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }]
    };

    const miscData = {
        labels: ['Points'],
        datasets: [{
            label: 'Misc',
            data: [
                stats.misc.points
            ],
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
        }]
    };

    return (
        <Layout>
            <div className="container my-4">
                <h2 className="text-center mb-4">Player Statistics</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="chart-container my-3">
                            <h3>Attack Stats</h3>
                            <Bar data={attackData} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="chart-container my-3">
                            <h3>Setting Stats</h3>
                            <Line data={settingData} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="chart-container my-3">
                            <h3>Serving Stats</h3>
                            <Bar data={servingData} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="chart-container my-3">
                            <h3>Passing Stats</h3>
                            <Line data={passingData} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="chart-container my-3">
                            <h3>Defense Stats</h3>
                            <Bar data={defenseData} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="chart-container my-3">
                            <h3>Blocking Stats</h3>
                            <Line data={blockingData} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="chart-container my-3">
                            <h3>Miscellaneous Stats</h3>
                            <Bar data={miscData} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Stats;
