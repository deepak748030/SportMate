import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import apiUrl from '../../api/config';
import { useAuth } from '../../context/auth';
import Layout from '../../components/layouts/Layout';

function Chats() {
    const [auth] = useAuth();
    const [userData, setUserData] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const navigate = useNavigate();

    const getAllUser = async () => {
        try {
            const res = await axios.get(`${apiUrl}/users`);
            // Filter out the logged-in user
            const filteredUsers = res.data.filter(user => user?._id !== auth?.user?._id);
            setUserData(filteredUsers);
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoadingUsers(false);
        }
    };

    useEffect(() => {
        getAllUser();
    }, []);

    const navigateToChat = (user) => {
        navigate(`/chat/${user._id}`, { state: { user } });
    };

    return (
        <Layout>
            <div className="container mt-4">
                {loadingUsers ? (
                    <div className='text text-center'>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <ListGroup style={{ maxWidth: '40rem', margin: 'auto', paddingBottom: '2rem' }}>
                        <h2 className="text-center">Chats</h2>
                        {userData.map(user => (
                            <ListGroupItem
                                key={user._id}
                                className="d-flex align-items-center"
                                onClick={() => navigateToChat(user)}
                                action
                            >
                                <Image
                                    src={"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" || "https://via.placeholder.com/50"}
                                    roundedCircle
                                    className="me-3"
                                    alt="User Avatar"
                                    style={{
                                        height: '50px',
                                        width: '50px'
                                    }}
                                />
                                <div>
                                    <div className="fw-bold">{user.firstName} {user.lastName}</div>
                                    <div className="text-muted">{user.email}</div>
                                </div>
                            </ListGroupItem>
                        ))}

                    </ListGroup>
                )}
            </div>
        </Layout>
    );
}

export default Chats;
