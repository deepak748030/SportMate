import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../api/config';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';

function JoinTeam() {
    const navigate = useNavigate()
    const { teamId } = useParams();
    const [auth] = useAuth();
    useEffect(() => {
        const joinTeam = async () => {
            try {
                await axios.post(`${apiUrl}/teams/${teamId}/add-friends`, {
                    friends: auth.user._id
                });
                navigate('/')
            } catch (error) {
                console.error('Error joining team:', error);
            }
        };

        if (teamId && auth.user) {
            joinTeam();
        }
    }, [teamId, auth.user, history]);

    return (
        <div>
            <p>Joining team...</p>
        </div>
    );
}

export default JoinTeam;
