import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layouts/Layout'
function Home() {
    const navigate = useNavigate();
    const login = true

    return (
        <Layout>
            <div className="d-flex flex-column min-vh-100">
                <main className="flex-grow-1">
                    <section className="py-5">
                        <div className="container">
                            <div className="row gx-5">
                                <div className="col-lg-6 d-flex flex-column justify-content-center">
                                    <h1 className="display-4 fw-bold">Bring Your Sports Events to Life</h1>
                                    <p className="text-muted my-3">
                                        Create and manage events for your favorite sports, from football to basketball and beyond. Our platform
                                        makes it easy to get the word out and bring your community together.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <Link to="/login" className="btn btn-primary">
                                            Create Event
                                        </Link>
                                        <Link to="/sports" className="btn btn-outline-primary">
                                            View Events
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img
                                        src=
                                        {login ? 'https://images.unsplash.com/photo-1579156618335-f6245e05236a?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' : 'https://via.placeholder.com/1200x400'}
                                        alt="Sports Events"
                                        className="img-fluid rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-5 bg-light">
                        <div className="container text-center">
                            <h2 className="display-5 fw-bold">Create Events for Any Sport</h2>
                            <p className="text-muted mb-5">
                                Our platform supports events for a wide range of sports, including football, basketball, cricket, tennis,
                                and more. Whether you're organizing a local tournament or a professional league, we've got you covered.
                            </p>
                            <div className="row gx-5">
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="badge bg-secondary mb-2">Football</div>
                                        <h3 className="h5">Football Events</h3>
                                        <p className="text-muted">Create and manage events for your local football league or tournament.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="badge bg-secondary mb-2">Basketball</div>
                                        <h3 className="h5">Basketball Events</h3>
                                        <p className="text-muted">Organize your community basketball tournaments and events.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="badge bg-secondary mb-2">Cricket</div>
                                        <h3 className="h5">Cricket Events</h3>
                                        <p className="text-muted">Manage cricket events, from local matches to regional tournaments.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="badge bg-secondary mb-2">Tennis</div>
                                        <h3 className="h5">Tennis Events</h3>
                                        <p className="text-muted">Create and promote tennis tournaments and events in your area.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="badge bg-secondary mb-2">Volleyball</div>
                                        <h3 className="h5">Volleyball Events</h3>
                                        <p className="text-muted">Organize volleyball tournaments and events for your local community.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="badge bg-secondary mb-2">Golf</div>
                                        <h3 className="h5">Golf Events</h3>
                                        <p className="text-muted">Create and manage golf tournaments and events for players of all levels.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-5">
                        <div className="container text-center">
                            <h2 className="display-5 fw-bold">Start Creating Your Event Today</h2>
                            <p className="text-muted mb-4">
                                Our platform makes it easy to get your sports event up and running. Sign up now and start promoting your
                                event to your community.
                            </p>
                            <div className="d-flex justify-content-center gap-2">
                                <Link to="/login" className="btn btn-primary">
                                    Create Event
                                </Link>
                                <Link to="/sports" className="btn btn-outline-primary">
                                    View Events
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    );
}

function ClubIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" />
            <path d="M12 17.66L12 22" />
        </svg>

    );
}

export default Home;
