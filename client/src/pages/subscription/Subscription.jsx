import React, { useState } from 'react';
import Layout from '../../components/layouts/Layout';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../../context/auth'
import apiUrl from '../../api/config'

const Subscription = () => {
    const [auth, setAuth] = useAuth();
    console.log(auth?.user?._id)
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [userId, setUserId] = useState(auth?.user?._id); // Replace with actual user ID logic

    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleSubscribe = async (plan) => {
        setSelectedPlan(plan);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedPlan(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${apiUrl}/subscribe`, {
                userId,
                plan: selectedPlan,
                cardDetails, // Include card details here
            });
            console.log('Subscription response:', response.data);
            setShowModal(false);
        } catch (error) {
            console.error('Error subscribing:', error);
        }
    };


    return (
        <Layout>
            <section className="w-100 py-5 py-md-6 py-lg-8">
                <div className="container">
                    <div className="row g-4 g-lg-5">
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <h1 className="display-4 fw-bold text-warning">Subscribe to our plan</h1>
                                <p className="text-muted lead">
                                    Get access to our premium features and support the development of our platform.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <span className="text-success fw-bold">✔</span> No ads
                                    </li>
                                    <li className="mb-2">
                                        <span className="text-success fw-bold">✔</span> Early access to events
                                    </li>
                                    <li className="mb-2">
                                        <span className="text-success fw-bold">✔</span> 24*7 Customer Support
                                    </li>
                                    <li className="mb-2">
                                        <span className="text-success fw-bold">✔</span> VIP Events
                                    </li>
                                    <li className="mb-2">
                                        <span className="text-success fw-bold">✔</span> Group Chats and Messaging
                                    </li>
                                </ul>
                                <p className="text-muted"><small>* Free trial for a week</small></p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h3 className="h4 fw-bold">Yearly</h3>
                                            <p className="text-muted">$100 billed annually</p>
                                        </div>
                                        <div className="text-end">
                                            <p className="h1 fw-bold">$100</p>
                                            <p className="text-muted">per year</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            className="btn btn-warning w-100 fw-bold"
                                            onClick={() => handleSubscribe('yearly')}
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h3 className="h4 fw-bold">Monthly</h3>
                                            <p className="text-muted">$10 billed monthly</p>
                                        </div>
                                        <div className="text-end">
                                            <p className="h1 fw-bold">$10</p>
                                            <p className="text-muted">per month</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            className="btn btn-warning w-100 fw-bold"
                                            onClick={() => handleSubscribe('monthly')}
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Complete your purchase</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>You have selected the {selectedPlan} plan.</p>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="cardNumber" className="mb-3">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="cardNumber"
                                value={cardDetails.cardNumber}
                                onChange={handleInputChange}
                                placeholder="Enter card number"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="expiryDate" className="mb-3">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control
                                type="text"
                                name="expiryDate"
                                value={cardDetails.expiryDate}
                                onChange={handleInputChange}
                                placeholder="MM/YY"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="cvv" className="mb-3">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control
                                type="text"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleInputChange}
                                placeholder="CVV"
                                required
                            />
                        </Form.Group>
                        <Button type="submit" variant="warning" className="w-100 fw-bold">
                            Complete Purchase
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Layout>
    );
};

export default Subscription;
