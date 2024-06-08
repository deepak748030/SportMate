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
                                src="https://images.unsplash.com/photo-1594488132458-b5148f24c26b"
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
                                src="https://images.unsplash.com/photo-1523297900563-4d50cefcde13"
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
                                src="https://images.unsplash.com/photo-1591619620130-18d0b84e7c9d"
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
                                src="https://images.unsplash.com/photo-1505575358136-3c6e2774e195"
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
                                src="https://images.unsplash.com/photo-1503437313881-503a9122645f"
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
                        Sportmate is FREE to download. All team management features are FREE to use, but we charge a small transaction fee if you collect
                    </p>
                </div>

                <div className="container text-center my-5">
                    <h1 className="d-flex justify-content-center font-weight-bold text-primary" style={{ fontSize: '3rem' }}>
                        How Much Does It Cost?
                    </h1>
                    <p className='my-4 text-secondary' style={{ fontSize: '1.5rem' }}>
                        Sportmate is FREE to download. All team management features are FREE to use, but we charge a small transaction fee if you collect payments through the app. It's easy to get started, and we offer competitive rates.
                    </p>

                </div>

                <div className="container text-center my-5">
                    <h1 className="d-flex justify-content-center font-weight-bold text-primary" style={{ fontSize: '3rem' }}>
                        Get Started Today!
                    </h1>
                    <p className='my-4 text-secondary' style={{ fontSize: '1.5rem' }}>
                        Don't wait any longer. Join thousands of others who are already managing their sports teams and classes with ease.
                    </p>
                    <button
                        className="btn btn-success px-5 py-3"
                        onClick={handleSignUpClick}
                    >
                        Sign Up Now
                    </button>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
