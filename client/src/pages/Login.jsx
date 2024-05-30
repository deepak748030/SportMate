import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../cssui/Responsive.css';
import Layout from '../components/layouts/Layout';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginData = {
            username,
            password,
            rememberMe
        };
        console.log(loginData);
        // Implement your login logic here
    };

    return (
        <Layout title="SPORTMATE - LOGIN" description="This is the login page">
            <div className="container mt-3 mb-5">
                <h1 className="text-center fw-bold">Login</h1>
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-4 my-5">
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            <i className="bi bi-person me-2"></i> Username <span className="text-danger">*</span>
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control py-md-3 py-lg-2"
                                id="username"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                autoComplete="current-username"
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            <i className="bi bi-lock me-2"></i> Password <span className="text-danger">*</span>
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control py-md-3 py-lg-2"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="current-password"
                            />
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="rememberMe">
                                    <i className="bi bi-check-square me-2"></i> Remember Me
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <div className="col-sm-10 offset-sm-2 d-flex justify-content-between">
                            <Link to="/forgot-password" className="text-decoration-none">
                                <i className="bi bi-question-circle me-2"></i> Forgot Password?
                            </Link>

                            <Link to="/signup" className="text-decoration-none">
                                <i className="bi bi-person-plus me-2"></i> Create Account
                            </Link>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <div className="col-sm-10 offset-sm-2">
                            <button type="submit" className="btn btn-success px-sm-5 py-sm-3" style={{ fontSize: '1.1rem' }}>
                                <i className="bi bi-box-arrow-in-right me-2"></i> Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Login;
