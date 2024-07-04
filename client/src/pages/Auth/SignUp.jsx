import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css/animate.min.css';
import Layout from '../../components/layouts/Layout';
import '../../cssui/Responsive.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import apiUrl from '../../api/config';

function Signup() {
    const [role, setRole] = useState('');  // Added role state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location, setLocation] = useState('');
    const [birthYear, setBirthYear] = useState('')
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [gamePosition, setGamePosition] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://ipapi.co/json/')
            .then(response => {
                setLocation(`${response.data.city}, ${response.data.region}`);
            })
            .catch(error => {
                console.error('There was an error fetching the location!', error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${apiUrl}/signup`, {
                role,  // Include role in the payload
                firstName,
                lastName,
                location,
                birthYear,
                email,
                phoneNumber,
                password,
                gender,
                gamePosition: role === 'player' ? gamePosition : ''  // Only include gamePosition if role is player
            });
            toast.success('User registered successfully!');
            setTimeout(() => {
                navigate('/login')
            }, 3000);
            // Reset form fields
            setRole('');
            setFirstName('');
            setLastName('');
            setBirthYear('');
            setReceiveEmails(false);
            setEmail('');
            setPhoneNumber('');
            setPassword('');
            setGender('');
            setGamePosition('');
        } catch (error) {
            console.error('Error registering user:', error);
            toast.error(error.response?.data?.message || 'Failed to register user');
        }
    };

    return (
        <Layout title="SPORTMATE - SIGN-UP" description="This is the signup page">
            <Container className="mt-3 mb-5 animate__animated animate__fadeIn">
                <h1 className="text-center fw-bold text-warning">Sign Up</h1>
                <Form onSubmit={handleSubmit} className="my-5">
                    <Form.Group as={Row} className="mb-3" controlId="role">
                        <Form.Label column sm={2}>
                            <i className="bi bi-person-badge me-2"></i> Sign Up As <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                as="select"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            >
                                <option value="">Select your role</option>
                                <option value="player">Player</option>
                                <option value="organizer">Organizer</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="firstName">
                        <Form.Label column sm={2}>
                            <i className="bi bi-person me-2"></i> First Name <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="lastName">
                        <Form.Label column sm={2}>
                            <i className="bi bi-person me-2"></i> Last Name <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="location">
                        <Form.Label column sm={2}>
                            <i className="bi bi-geo-alt me-2"></i> Location <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Location"
                                value={location}
                                readOnly
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="birthYear">
                        <Form.Label column sm={2}>
                            <i className="bi bi-calendar me-2"></i> Birth Year
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                as="select"
                                value={birthYear}
                                onChange={(e) => setBirthYear(e.target.value)}
                            >
                                <option value="">Select your birth year</option>
                                {[...Array(100).keys()].map(i => {
                                    const year = new Date().getFullYear() - i;
                                    return <option key={year} value={year}>{year}</option>
                                })}
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    {role === 'player' && (
                        <Form.Group as={Row} className="mb-3" controlId="gamePosition">
                            <Form.Label column sm={2}>
                                <i className="bi bi-play me-2"></i> GamePlay Position
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    as="select"
                                    value={gamePosition}
                                    onChange={(e) => setGamePosition(e.target.value)}
                                    required
                                >
                                    <option value="">Select your GamePlay Position</option>
                                    <option value="rightHitter">Right Side Hitter</option>
                                    <option value="middleBlocker">Middle Blocker</option>
                                    <option value="opposite">Opposite</option>
                                    <option value="setter">Setter</option>
                                    <option value="outsideHitter">Outside Hitter</option>
                                    <option value="libero">Middle Blocker/Libero</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    )}

                    <Form.Group as={Row} className="mb-3" controlId="gender">
                        <Form.Label column sm={2}>
                            <i className="bi bi-gender-ambiguous me-2"></i> Gender <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                as="select"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required
                            >
                                <option value="">Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3" controlId="email">
                        <Form.Label column sm={2}>
                            <i className="bi bi-envelope me-2"></i> Email <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="email"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="phoneNumber">
                        <Form.Label column sm={2}>
                            <i className="bi bi-telephone me-2"></i> Phone Number <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="password">
                        <Form.Label column sm={2}>
                            <i className="bi bi-key me-2"></i> Password <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="passwordConfirmation">
                        <Form.Label column sm={2}>
                            <i className="bi bi-key me-2"></i> Confirm Password <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                value={password}
                                required
                                autoComplete="new-password"
                            />
                        </Col>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Sign Up
                    </Button>
                </Form>
            </Container>
        </Layout>
    );
}

export default Signup;
