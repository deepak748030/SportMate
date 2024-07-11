import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './NavBar.css';
import { useAuth } from '../context/auth';

const Navbar = () => {
    const [auth, setAuth] = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = async () => {
        await localStorage.removeItem('auth');
        await setAuth('');
        toast.success('Logout success');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
            <div className="container">
                <Link className="navbar-brand text-warning fw-semibold" to="/">
                    SportMate
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {auth?.user ? (
                            <>


                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">
                                        Profile
                                    </Link>
                                </li>

                                {auth?.user?.role === 'admin' && (
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin-dashboard">
                                            Admin
                                        </Link>
                                    </li>
                                )}
                                {auth?.user?.role === 'organizer' && (
                                    <>
                                        <li className="nav-item">

                                            <Link className="nav-link" to="/events/detail">
                                                Stats
                                            </Link>

                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/organizer-dashboard">
                                                Organizer Dashboard
                                            </Link>
                                        </li>
                                    </>



                                )}
                                {auth?.user?.role === 'player' && (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/events">
                                                All Events
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/user-dashboard">
                                                User Dashboard
                                            </Link>
                                        </li>
                                    </>



                                )}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/myteams">
                                        Teams
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/subscription">
                                        Subscription
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={handleLogout}>
                                        Logout
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">
                                        Sign Up
                                    </Link>
                                </li>
                            </>
                        )}
                        <li className="nav-item">
                            <Link className="nav-link" to="/feedback">
                                Feedback
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
