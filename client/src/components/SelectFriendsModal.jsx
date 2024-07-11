// SelectFriendsModal.jsx

import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import apiUrl from '../api/config';
import { useAuth } from '../context/auth';
import { PersonPlusFill } from 'react-bootstrap-icons'; // Bootstrap icons

const SelectFriendsModal = ({ show, handleClose, teamId, fetchTeams }) => {
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [joinedUsers, setJoinedUsers] = useState([]); // State to hold joined users
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

    useEffect(() => {
        if (show) {
            fetchUsers();
            fetchJoinedUsers();
        }
    }, [show, teamId]);

    // Handle change in selected users
    const handleUserChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedUsers(value);
    };

    // Handle add friends action
    const handleAddFriends = async () => {
        try {
            await axios.put(`${apiUrl}/teams/${teamId}/add-friends`, { friends: selectedUsers });
            fetchTeams();
            fetchJoinedUsers(); // Refresh joined users list after adding friends
            setSelectedUsers([]); // Clear selected users after adding
        } catch (error) {
            console.error('Error adding friends:', error);
        }
    };

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
                <Form>
                    <Form.Group controlId="friends">
                        <Form.Label>Select Friends to Add:</Form.Label>
                        <Form.Control as="select" multiple onChange={handleUserChange} style={{ minHeight: '200px' }}>
                            {users.map(user => (
                                <option key={user._id} value={user._id} className='p-1 border'>
                                    <PersonPlusFill className="me-2" /> {/* Bootstrap icon for person */}
                                    {`${user.firstName} ${user.lastName}`}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" onClick={handleAddFriends} disabled={selectedUsers.length === 0} className='mt-2'>
                        <PersonPlusFill /> Add Selected Friends
                    </Button>
                </Form>
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
