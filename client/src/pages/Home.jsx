import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    return (
        <Layout description='Sportmate helps you manage sports teams and exercise classes effortlessly'>
            <div className="container mt-5 w-100">
                <div className="row">
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <div>
                            <img
                                src="https://source.unsplash.com/random/600x400"
                                alt="Sportmate Hero Banner"
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-start p-3">
                        <h1 className="font-weight-bold text-primary">Manage Your Sports Team or Exercise Class with Sportmate!</h1>
                        <p className='my-3 text-secondary' style={{ fontSize: '1.3rem' }}>Sign up today and get started in minutes!</p>
                        <div className='d-flex gap-2'>
                            <button
                                className="btn btn-success mt-2 px-4 py-3"
                                onClick={handleSignUpClick}
                            >
                                Free Sign Up
                            </button>
                            <button
                                className="btn btn-primary mt-2 px-4 py-3"
                                onClick={() => { navigate('login') }}
                            >
                                Log In
                            </button>
                        </div>
                    </div>
                </div>

                <div className="container text-center my-5">
                    <h1 className="d-flex justify-content-center font-weight-bold text-primary" style={{ fontSize: '3rem' }}>
                        Who is Sportmate for?
                    </h1>
                    <p className='px-md-5 text-secondary' style={{ fontSize: '1.5rem' }}>
                        Sportmate is perfect for anyone organizing sports teams, exercise classes, or coaching sessions.
                        Easy to use, Sportmate helps you manage attendance and micro-payments seamlessly.
                    </p>
                </div>

                <div className="container text-center my-5">
                    <h1 className="d-flex justify-content-center font-weight-bold text-primary" style={{ fontSize: '3rem' }}>
                        What Can You Do with Sportmate?
                    </h1>
                    <p className='px-md-5 text-secondary' style={{ fontSize: '1.5rem' }}>
                        Sportmate is a free app for managing sports teams, events, and classes.
                        Organize events, confirm attendance, and accept payments all in one easy-to-use app.
                    </p>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-start p-3">
                        <h1 className="text-primary">Create Events</h1>
                        <p className='my-2 text-muted' style={{ fontSize: '1.3rem' }}>
                            Create matches, training sessions, exercise classes, or social events and promote them online to your attendees.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <div>
                            <img
                                src="https://source.unsplash.com/featured/?event"
                                alt="Create Events"
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <div>
                            <img
                                src="https://source.unsplash.com/featured/?attendance"
                                alt="Confirm Attendance"
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-start p-3">
                        <h1 className="text-primary">Confirm Attendance</h1>
                        <p className='my-2 text-muted' style={{ fontSize: '1.3rem' }}>
                            Send invites by mobile prompts and emails. Attendees can confirm attendance within the brilliant Sportmate app; no annoying emails or text messages.
                        </p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center -start p-3">
                        <h1 className="text-primary">Accept Payments</h1>
                        <p className='my-2 text-muted' style={{ fontSize: '1.3rem' }}>
                            Collect payment from attendees using Sportmate’s
                            seamless online payment feature. Low cost and super fast. Every transaction is recorded and stored online.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <div>
                            <img
                                src="https://source.unsplash.com/featured/?payment"
                                alt="Accept Payments"
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <div>
                            <img
                                src="https://source.unsplash.com/featured/?messaging"
                                alt="Instant Messaging"
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-start p-3">
                        <h1 className="text-primary">Instant Messaging</h1>
                        <p className='my-2 text-muted' style={{ fontSize: '1.3rem' }}>
                            Send free in-app messages to attendees and receive instant notifications when they reply. Create private and public group conversations.
                        </p>
                    </div>
                </div>

                <div className="container text-center my-5">
                    <h1 className="d-flex justify-content-center font-weight-bold text-primary" style={{ fontSize: '3rem' }}>
                        How Much Does It Cost?
                    </h1>
                    <p className='my-4 text-secondary' style={{ fontSize: '1.5rem' }}>
                        Sportmate is FREE to download. All team management features are FREE to use, but we charge a small transaction fee if you collect payments through the app.
                    </p>
                    <div className='d-flex justify-content-center font-weight-bold text-primary' style={{ fontSize: '5rem' }}>
                        IT'S FREE
                    </div>
                </div>
            </div>

            <div className='w-100 text-center py-5' style={{
                backgroundColor: '#323b4e',
                color: '#BFBFBF',
            }}>
                <h1 className="fs-md-6 fs-lg-7">
                    Sportmate is a free, easy-to-use mobile app;
                    <span style={{ fontWeight: 'bold' }}> Sign up today for instant access!</span>
                </h1>
                <button
                    className="btn btn-success mt-5 px-5 py-3"
                    style={{ backgroundColor: '#5cab84', borderColor: '#5cab84', fontSize: '1.5rem' }}
                    onClick={handleSignUpClick}
                >
                    Free Sign Up
                </button>
            </div>
        </Layout>
    );
}

export default Home;

