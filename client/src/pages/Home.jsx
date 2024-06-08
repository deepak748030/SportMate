import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layouts/Layout';

function Home() {
    const navigate = useNavigate();
    const login = true;

    return (
        <Layout>
            <div className="d-flex flex-column min-vh-100">
                <main className="flex-grow-1">
                    <section className="py-5">
                        <div className="container">
                            <div className="row gx-5">
                                <div className="col-lg-6 d-flex flex-column justify-content-center">
                                    <h1 className="display-4 fw-bold">Elevate Your Sports Events with Ease</h1>
                                    <p className="text-muted my-3">
                                        Discover a seamless platform to create, manage, and promote your sports events at competitive rates.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <Link to="/login" className="btn btn-primary">
                                            Get Started Today!
                                        </Link>
                                        <Link to="/sports" className="btn btn-outline-primary">
                                            View Events
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img
                                        src={
                                            login
                                                ? 'https://images.unsplash.com/photo-1579156618335-f6245e05236a?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                                : 'https://via.placeholder.com/1200x400'
                                        }
                                        alt="Sports Events"
                                        className="img-fluid rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-5 bg-light">
                        <div className="container text-center">
                            <h2 className="display-5 fw-bold">Streamline Your Sports Event Management</h2>
                            <p className="text-muted mb-5">
                                Our platform offers a comprehensive solution to manage your sports teams, classes, and events with ease, all at competitive rates.
                            </p>
                            <div className="row gx-5">
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="badge bg-secondary mb-2">Team Management</div>
                                        <h3 className="h5">Easily manage your sports teams</h3>
                                        <p className="text-muted">Including player rosters, schedules, and communication.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="badge bg-secondary mb-2">Class Scheduling</div>
                                        <h3 className="h5">Streamline scheduling and registration</h3>
                                        <p className="text-muted">For your sports classes and clinics.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="badge bg-secondary mb-2">Event Organization</div>
                                        <h3 className="h5">Effortlessly create and manage events</h3>
                                        <p className="text-muted">From tournaments to leagues.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="badge bg-secondary mb-2">Competitive Rates</div>
                                        <h3 className="h5">Enjoy our competitive pricing</h3>
                                        <p className="text-muted">To maximize your budget.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="badge bg-secondary mb-2">Participant Engagement</div>
                                        <h3 className="h5">Engage your participants</h3>
                                        <p className="text-muted">With features like online registration and real-time leaderboards.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="badge bg-secondary mb-2">Reporting and Analytics</div>
                                        <h3 className="h5">Gain valuable insights</h3>
                                        <p className="text-muted">Into your sports events with comprehensive reporting.</p>
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

                    {/* Additional Content Section */}
                    <section className="py-5 bg-light">
                        <div className="container text-center">
                            <h2 className="display-5 fw-bold">Why Choose Us?</h2>
                            <p className="text-muted mb-5">
                                Our platform offers a range of features designed to make organizing and managing sports events as easy as possible.
                            </p>
                            <div className="row gx-5">
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="badge bg-secondary mb-2">User-Friendly</div>
                                        <h3 className="h5">Easy to Use</h3>
                                        <p className="text-muted">Our intuitive interface makes it easy to create and manage events.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="badge bg-secondary mb-2">Comprehensive</div>
                                        <h3 className="h5">All-In-One Solution</h3>
                                        <p className="text-muted">From event creation to management, we have all the tools you need.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="badge bg-secondary mb-2">Support</div>
                                        <h3 className="h5">24/7 Support</h3>
                                        <p className="text-muted">Our team is here to help you at any time with any issues you may face.</p>
                                    </div>
                                </div>
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
