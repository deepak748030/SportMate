import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <div>
                            <img
                                src="/hero-banner.png"
                                alt="Example"
                                className="img-fluid lazy"
                                style={{ maxWidth: '100%', height: 'auto', maxHeight: '145rem' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-start p-3">
                        <h1 className="font-weight-bold">Manage your sports team or exercise class with Teamer!</h1>
                        <p className='my-3 text-large'>Sign up today for instant access!</p>
                        <button
                            className="btn btn-success mt-2 px-4 py-3"
                            style={{ backgroundColor: '#5cab84', borderColor: '#5cab84' }}
                        >
                            Free Sign Up
                        </button>
                    </div>
                </div>

                <div className="container text-center my-5">
                    <h1 className="d-flex justify-content-center font-weight-bold" style={{ fontSize: '3rem' }}>
                        Who is it for?
                    </h1>
                    <p style={{ fontSize: '1.5rem' }}>
                        Teamer is for anyone organising a sports team, exercise class or coaching session.<br />
                        Easy-to-use, Teamer is the perfect solution to manage attendance<br />
                        and micro-payments online.
                    </p>
                </div>

                <div className="container text-center my-5">
                    <h1 className="d-flex justify-content-center font-weight-bold" style={{ fontSize: '3rem' }}>
                        What can I do?
                    </h1>
                    <p style={{ fontSize: '1.5rem' }}>
                        Teamer is a free app for sports teams, sports events and class organisers. <br />
                        Manage teammates and parents, organise events, confirm attendance <br />
                        and accept payments in one brilliant, easy-to-use app.
                    </p>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-start p-3">
                        <h1>Create events</h1>
                        <p className='my-2 text-medium text-muted' style={{
                            fontSize: '1.3rem'
                        }}  >
                            Create your match, training session,<br /> exercise class or social event and promote <br /> it online to your attendees.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <div>
                            <img
                                src="/screen-set-01.png"
                                alt="Example"
                                className="img-fluid lazy"
                                style={{ maxWidth: '100%', height: 'auto', maxHeight: '145rem' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <div>
                            <img
                                src="/screen-set-02.png"
                                alt="Example"
                                className="img-fluid lazy"
                                style={{ maxWidth: '100%', height: 'auto', maxHeight: '145rem' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-start p-3">
                        <h1>Confirm attendance</h1>
                        <p className='my-2 text-medium text-muted' style={{
                            fontSize: '1.3rem'
                        }} >
                            Send invites by mobile prompts and<br />emails. Attendees can confirm attendance<br />
                            within the brilliant Teamer app; no <br />
                            annoying emails or text messages.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-start p-3">
                        <h1>Accept payments</h1>
                        <p className='my-2 text-medium text-muted' style={{
                            fontSize: '1.3rem'
                        }} >
                            Collect payment from attendees using<br />
                            Teamer’s seamless online payment<br />
                            feature. Low cost and super fast. Every<br />
                            transaction is recorded and stored online.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <div>
                            <img
                                src="/screen-set-03.png"
                                alt="Example"
                                className="img-fluid lazy"
                                style={{ maxWidth: '100%', height: 'auto', maxHeight: '145rem' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <div>
                            <img
                                src="/screen-set-02.png"
                                alt="Example"
                                className="img-fluid lazy"
                                style={{ maxWidth: '100%', height: 'auto', maxHeight: '145rem' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-start p-3">
                        <h1>Instant messaging</h1>
                        <p className='my-2 text-medium text-muted' style={{
                            fontSize: '1.3rem'
                        }} >
                            Send free in-app messages to attendees<br />and receive instant notifications when<br />
                            they reply. Create private and public group<br />
                            conversations.
                        </p>
                    </div>
                </div>

                <div className="container text-center my-5">
                    <h1 className="d-flex justify-content-center font-weight-bold" style={{ fontSize: '3rem' }}>
                        How much does it cost?
                    </h1>
                    <p className='my-4' style={{ fontSize: '1.5rem' }} >
                        Teamer is FREE to download. All team management features are FREE to use, but we<br />
                        charge a small transaction fee if you collect a payment.
                    </p>
                    <div className='d-flex justify-content-center font-weight-bold' style={{ fontSize: '5rem' }}>
                        IT'S FREE
                    </div>
                </div>
            </div>

            <div className='w-100 text-center p-5' style={{
                backgroundColor: '#323b4e',
                color: '#BFBFBF',
            }}>
                <h1 style={{ fontSize: '3rem' }}>
                    Teamer is a free, easy-to-use mobile app;<br />
                    <span style={{ fontWeight: 'bold' }}>
                        Sign up today for instant access!
                    </span>
                </h1>
                <button
                    className="btn btn-success mt-5 px-5 py-3"
                    style={{ backgroundColor: '#5cab84', borderColor: '#5cab84', fontSize: '1.5rem' }}
                >
                    Free Sign Up
                </button>
            </div>

            <footer className='w-100 text-center py-3' style={{ backgroundColor: '#323b4e', color: '#FFFFFF' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>
                                <Link to="#home" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}>Home</Link>|
                                <Link to="#sports" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}>Sports</Link>|
                                <Link to="#about" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}>About</Link>|
                                <Link to="#advertising" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}>Advertising</Link>|
                                <Link to="#support" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}>Support</Link>|
                                <Link to="#privacy" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}>Privacy Policy</Link>
                            </p>
                            <p>© Pitch Hero Ltd 2008-2022</p>
                            <p>Pitch Hero Ltd registered in England | WF3 1DR | Company number - 06361033</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Home;
