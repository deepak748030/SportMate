import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-sm-3" style={{ backgroundColor: '#323b4e' }}>
            <div className="container py-2">
                <Link className="navbar-brand" to="/">SPORTS-MATE</Link>
                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav" style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1000, width: '100%', backgroundColor: '#323b4e', transition: 'all 0.3s ease' }}>
                    <ul className="navbar-nav ms-auto nav_ul align-items-center" style={{ width: '100%' }}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
