import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../../components/layouts/Layout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiUrl from '../../api/config';

function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const { token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${apiUrl}/reset-password`, { token, newPassword });
            toast.success('Password reset successful. Please log in with your new password.');
            navigate('/login');
        } catch (error) {
            toast.error('Failed to reset password. Please try again.');
        }
    };

    return (
        <Layout title="SPORTS_MATE - RESET PASSWORD">
            <div className="container d-flex justify-content-center align-items-center min-vh-100 py-5 bg-light">
                <div className="col-12 col-md-8 col-lg-6 p-5 shadow-lg bg-white rounded">
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal fw-bold">Reset Password</h1>
                        <p className="px-2">
                            Enter your new password below.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group my-4">
                            <label htmlFor="newPassword" className="form-label">New Password</label>
                            <input
                                type="password"
                                id="newPassword"
                                className="form-control mt-2"
                                placeholder="Enter your new password"
                                required
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />

                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">
                            Reset Password
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

export default ResetPassword;
