import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, ListGroup, Alert } from 'react-bootstrap';
import axios from 'axios';
import apiUrl from '../api/config';
import { useAuth } from '../context/auth';
import { PersonPlusFill, Link45deg } from 'react-bootstrap-icons'; // Bootstrap icons

const SelectFriendsModal = ({ show, handleClose, teamId, fetchTeams }) => {
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [joinedUsers, setJoinedUsers] = useState([]); // State to hold joined users
    const [joinLink, setJoinLink] = useState(''); // State to hold the join link
    const [auth] = useAuth();

    // Fetch all users
    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${apiUrl}/users`);
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // Fetch joined users for the current team
    const fetchJoinedUsers = async () => {
        try {
            const response = await axios.get(`${apiUrl}/teams/${teamId}/get-friends`);
            setJoinedUsers(response.data);
        } catch (error) {
            console.error('Error fetching joined users:', error);
        }
    };

    // Generate join link for the current team
    const generateJoinLink = async () => {
        try {
            const response = await axios.get(`${apiUrl}/teams/${teamId}/generate-join-link`);
            setJoinLink(response.data.joinLink);
        } catch (error) {
            console.error('Error generating join link:', error);
        }
    };

    useEffect(() => {
        if (show) {
            fetchUsers();
            fetchJoinedUsers();
            generateJoinLink();
        }
    }, [show, teamId]);

    // Handle remove friend action
    const handleRemoveFriend = async (userId) => {
        try {
            await axios.delete(`${apiUrl}/teams/${teamId}/remove-friend/${userId}`);
            fetchTeams();
            fetchJoinedUsers(); // Refresh joined users list after removing friend
        } catch (error) {
            console.error('Error removing friend:', error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Select Friends</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant="info">
                    <div className="d-flex align-items-center">
                        <Link45deg className="me-2" /> {/* Bootstrap icon for link */}
                        <span>Share this link to invite friends to join your team:</span>
                    </div>
                    <Form.Control
                        type="text"
                        readOnly
                        value={joinLink}
                        className="mt-2"
                    />
                </Alert>
                <hr />
                {/* Display joined users */}
                <div>
                    <p>Joined Users:</p>
                    <ListGroup>
                        {joinedUsers.map(user => (
                            <ListGroup.Item key={user._id} className="d-flex justify-content-between align-items-center">
                                <span>
                                    <PersonPlusFill className="me-2" /> {/* Bootstrap icon for person */}
                                    {`${user.firstName} ${user.lastName}`}
                                </span>
                                <Button variant="danger" size="sm" onClick={() => handleRemoveFriend(user._id)}>
                                    Remove
                                </Button>
                            </ListGroup.Item>
                        ))}
                        {joinedUsers.length === 0 && <ListGroup.Item>No users have joined yet.</ListGroup.Item>}
                    </ListGroup>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SelectFriendsModal;
