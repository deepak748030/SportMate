import React from 'react';
import Layout from '../../components/layouts/Layout';

const Subscription = () => {
    return (
        <Layout>
            <section className="w-100 py-5 py-md-6 py-lg-8">
                <div className="container">
                    <div className="row g-4 g-lg-5">
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <h1 className="display-4 fw-bold">Subscribe to our plan</h1>
                                <p className="text-muted lead">
                                    Get access to our premium features and support the development of our platform.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h3 className="h4 fw-bold">Yearly</h3>
                                            <p className="text-muted">$120 billed annually</p>
                                        </div>
                                        <div className="text-end">
                                            <p className="h1 fw-bold">$120</p>
                                            <p className="text-muted">per year</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button className="btn btn-primary w-100">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h3 className="h4 fw-bold">Monthly</h3>
                                            <p className="text-muted">$20 billed monthly</p>
                                        </div>
                                        <div className="text-end">
                                            <p className="h1 fw-bold">$20</p>
                                            <p className="text-muted">per month</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button className="btn btn-primary w-100">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Subscription;
