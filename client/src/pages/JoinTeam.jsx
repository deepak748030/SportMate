import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../api/config';
import { useAuth } from '../context/auth';

function JoinTeam() {
    const navigate = useNavigate();
    const { teamId } = useParams();
    const [auth] = useAuth();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const joinTeam = async () => {
            try {
                await axios.post(`${apiUrl}/teams/${teamId}/add-friends`, {
                    friends: auth.user._id
                });
                navigate('/');
            } catch (error) {
                setError('Error joining team. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        if (teamId && auth.user) {
            joinTeam();
        }
    }, [teamId, auth.user, navigate]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {loading && (
                        <div className="text-center my-5">
                            <div className="spinner-border" role="status">
                                {/* <span className="sr-only">Loading...</span> */}
                            </div>
                            <p>Joining team...</p>
                        </div>
                    )}
                    {error && (
                        <div className="alert alert-danger my-5" role="alert">
                            {error}
                        </div>
                    )}
                    {!loading && !error && (
                        <div className="text-center my-5">
                            <p>Successfully joined the team!</p>
                            <Button className="btn btn-primary" onClick={() => navigate('/')}>
                                Go to Home
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default JoinTeam;
