import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layouts/Layout';
import './Home.css';

function Home() {

    const avimg = true;

    return (
        <Layout>
            <div className="d-flex flex-column min-vh-100">

                <section className="py-5">
                    <div className="container">
                        <div className="row gx-4">
                            <div className="col-lg-6 d-flex flex-column justify-content-center">
                                <h1 className="display-4  fw-bold">Elevate Your Volleyball Events with Ease</h1>
                                <p className="text-muted my-3">
                                    Discover a seamless platform to create, manage, and promote your volleyball events at competitive rates.
                                </p>
                                <div className="d-flex gap-2 mb-3">
                                    <Link to="/login" className="btn btn-warning">
                                        Get Started Today!
                                    </Link>
                                    <Link to="/volleyball" className="btn btn-outline-warning">
                                        View Events
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img
                                    src={
                                        avimg
                                            ? 'https://cdn.pixabay.com/photo/2018/01/27/11/03/silhouette-3110928_1280.png'
                                            : 'https://via.placeholder.com/1200x400'
                                    }
                                    alt="Volleyball Events"
                                    className="img-fluid rounded"
                                    style={{
                                        maxHeight: '30rem',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-light">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold">Streamline Your Volleyball Event Management</h2>
                        <p className="text-muted mb-5">
                            Our platform offers a comprehensive solution to manage your volleyball teams, classes, and events with ease, all at competitive rates.
                        </p>
                        <div className="row gx-4">
                            <div className="col-md-4 ">
                                <div className=" p-3 rounded shadow-sm card">
                                    <div className="badge   m-3 pt-2 pb-2 ps-4 pe-4"><h6 className="h5 ">Team Management</h6></div>
                                    <h3 className="h5">Easily manage your volleyball teams</h3>
                                    <p className="text-muted">Including player rosters, schedules, and communication.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className=" p-3 rounded shadow-sm card" >
                                <div className="badge   m-3 pt-2 pb-2 ps-4 pe-4"><h6 className="h5 ">Class Scheduling</h6></div>
                                    <h3 className="h5">Streamline scheduling and registration</h3>
                                    <p className="text-muted">For your volleyball classes and clinics.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className=" p-3 rounded shadow-sm card">
                                <div className="badge   m-3 pt-2 pb-2 ps-4 pe-4"><h6 className="h5 ">Event Organization</h6></div>
                                    <h3 className="h5">Effortlessly create and manage events</h3>
                                    <p className="text-muted">From tournaments to leagues.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className=" p-3 rounded shadow-sm card">
                                <div className="badge   m-3 pt-2 pb-2 ps-4 pe-4"><h6 className="h5 ">Competitive Rates</h6></div>
                                    <h3 className="h5">Enjoy our competitive pricing</h3>
                                    <p className="text-muted">To maximize your budget.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className=" p-3 rounded shadow-sm card">
                                <div className="badge   m-3 pt-2 pb-2 ps-4 pe-4"><h6 className="h5 ">Participant Engagement</h6></div>
                                    <h3 className="h5">Engage your participants</h3>
                                    <p className="text-muted">With features like online registration and real-time leaderboards.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className=" p-3 rounded shadow-sm card">
                                <div className="badge   m-3 pt-2 pb-2 ps-4 pe-4"><h6 className="h5 ">Reporting and Analytics</h6></div>
                                    <h3 className="h5">Gain valuable insights</h3>
                                    <p className="text-muted">Into your volleyball events with comprehensive reporting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold">Start Creating Your Volleyball Event Today</h2>
                        <p className="text-muted mb-4">
                            Our platform makes it easy to get your volleyball event up and running. Sign up now and start promoting your
                            event to your community.
                        </p>
                        <div className="d-flex justify-content-center gap-2">
                            <Link to="/login" className="btn btn-warning">
                                Create Event
                            </Link>
                            <Link to="/volleyball" className="btn btn-outline-warning">
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
                            Our platform offers a range of features designed to make organizing and managing volleyball events as easy as possible.
                        </p>
                        <div className="row gx-4">
                            <div className="col-md-4">
                                <div className="p-3 rounded shadow-sm card">
                                <div className="badge m-3 pt-2 pb-2 ps-4 pe-4"><h6 className="h5">User-Friendly</h6></div>
                                    <h3 className="h5">Easy to Use</h3>
                                    <p className="text-muted">Our intuitive interface makes it easy to create and manage events.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className=" p-3 rounded shadow-sm card">
                                <div className="badge   m-3 pt-2 pb-2 ps-4 pe-4"><h6 className="h5">Comprehensive</h6></div>
                                    <h3 className="h5">All-In-One Solution</h3>
                                    <p className="text-muted">From event creation to management, we have all the tools you need.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className=" p-3 rounded shadow-sm card">
                                <div className="badge   m-3 pt-2 pb-2 ps-4 pe-4"><h6 className="h5">Support</h6></div>
                                    <h3 className="h5">24/7 Support</h3>
                                    <p className="text-muted">Our team is here to help you at any time with any issues you may face.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default Home;
