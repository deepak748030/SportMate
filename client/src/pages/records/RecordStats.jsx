// components/RecordStats.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import apiUrl from '../../api/config';
import { toast } from 'react-toastify';

const RecordStats = ({ playerId, eventId }) => {
    const [stats, setStats] = useState({
        attack: { kills: 0, errors: 0, totalAttacks: 0, hittingPercentage: 0 },
        setting: { assists: 0, ballHandlingErrors: 0 },
        serving: { serviceAces: 0, serveAttempts: 0 },
        passing: { receptionErrors: 0, receptionAttempts: 0 },
        defense: { digs: 0 },
        blocking: { blockSolos: 0, blockAssists: 0, blockingErrors: 0 },
        misc: { points: 0 }
    });

    const handleChange = (category, field, value) => {
        setStats((prevStats) => ({
            ...prevStats,
            [category]: { ...prevStats[category], [field]: value }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${apiUrl}/stats/record`, {
                playerId,
                eventId,
                stats
            });
            if (res?.data) {
                toast.success('Stats recorded successfully');
            }
        } catch (error) {
            console.error('Error recording stats:', error);
            toast.error('Failed to record stats');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h5>Record Stats</h5>
            {/* Render form fields dynamically */}
            {Object.keys(stats).map((category) => (
                <div key={category}>
                    <h6>{category.charAt(0).toUpperCase() + category.slice(1)}</h6>
                    {Object.keys(stats[category]).map((field) => (
                        <Form.Group className="mb-3" key={field}>
                            <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                            <Form.Control
                                type="number"
                                value={stats[category][field]}
                                onChange={(e) => handleChange(category, field, e.target.value)}
                            />
                        </Form.Group>
                    ))}
                </div>
            ))}
            <Button variant="primary" type="submit">
                Submit Stats
            </Button>
        </Form>
    );
};

export default RecordStats;
