import React, { useState } from 'react';
import '../cssui/Responsive.css';
import Layout from '../components/layouts/Layout';

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
        <Layout title="SPORTS-MATE - LOGIN" description="This is the login page">
            <div className="container mt-3 mb-5">
                <h1 className="text-center" style={{ fontWeight: 'bold' }}>Login</h1>
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 my-5">
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username <span className="text-danger">*</span>
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
                            Password <span className="text-danger">*</span>
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
                                    Remember Me
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <div className="col-sm-10 offset-sm-2">
                            <button type="submit" className="btn btn-success px-sm-5 py-sm-3" style={{ fontSize: '1.1rem' }}>
                                Login
                            </button>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <div className="col-sm-10 offset-sm-2">
                            <a href="/forgot-password" className="text-decoration-none">
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Login;
