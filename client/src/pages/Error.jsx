import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layouts/Layout';

export default function Error() {
    return (
        <Layout>
            <div className="d-flex min-vh-50 mt-5 flex-column align-items-center justify-content-center bg-light px-4 py-12">
                <div className="mx-auto text-center" style={{ maxWidth: '400px' }}>
                    <img
                        alt="404 Error"
                        className="mx-auto rounded-circle mt-5"
                        src="/logo.png"
                        style={{
                            width: '50%',
                            height: '50%',
                            aspectRatio: '1/1',
                            objectFit: 'cover',
                            marginBottom: '-2rem'
                        }}
                    />
                    <h1 className="display-4 font-weight-bold text-dark">Oops! Page not found.</h1>
                    <p className="mt-3 text-muted">
                        The page you're looking for doesn't exist. It might have been moved or deleted.
                    </p>
                    <Link to="/" className="mt-4 btn btn-dark btn-lg">
                        <i className="bi bi-house-door-fill me-2"></i>
                        Go back home
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
