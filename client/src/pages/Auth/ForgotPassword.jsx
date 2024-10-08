import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../components/layouts/Layout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiUrl from '../../api/config'

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${apiUrl}/forgot-password`, { email });
            toast.success('Password reset link has been sent to your email');
        } catch (error) {
            toast.error('Failed to send password reset link');
        }
    };

    return (
        <Layout title="SPORTS_MATE - FORGOT PASSWORD">
            <div className="container d-flex justify-content-center align-items-center min-vh-100 py-5 bg-light">
                <div className="col-12 col-md-8 col-lg-6 p-5 shadow-lg bg-white rounded">
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal fw-bold">Forgot Password?</h1>
                        <p className="px-2">
                            Don't worry! Just fill in your email and we'll send you a link to reset your password.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group my-4">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control mt-2"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">
                            Send Reset Link
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <p>
                            Remembered your password? <a href="/login" className="text-decoration-none">Login</a>
                        </p>
                        <p>
                            Don't have an account? <a href="/signup" className="text-decoration-none">Sign Up</a>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ForgotPassword;
