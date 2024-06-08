import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="d-flex align-items-center mb-3">
                            <img src='./vite.svg' />
                            <span className="ml-2 h4">SportsMate</span>
                        </div>
                        <p className="text-muted">Discover and create sports events in your local community.</p>
                        <div className="d-flex gap-3 fs-4">
                            <Link href="#" className="text-muted mr-3">
                                <i className="bi bi-messenger"></i>
                            </Link>
                            <Link href="#" className="text-muted mr-3">
                                <i className="bi bi-twitter-x"></i>
                            </Link>
                            <Link href="#" className="text-muted">
                                <i className="bi bi-instagram"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link href="#" className="text-muted" style={{ textDecoration: 'none' }}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted" style={{ textDecoration: 'none' }}>
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted" style={{ textDecoration: 'none' }}>
                                    Create Event
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted" style={{ textDecoration: 'none' }}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center gap-2 mb-2">
                                <i className="bi bi-geo-alt text-primary"></i>
                                <span>123 Main St, Anytown USA</span>
                            </li>
                            <li className="d-flex align-items-center gap-2 mb-2">
                                <i className="bi bi-telephone text-primary"></i>
                                <span>+1 (555) 555-5555</span>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <i className="bi bi-envelope text-primary"></i>
                                <span>info@sportsmate.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 border-top border-gray pt-4 text-center text-muted">
                    &copy; 2024 SportsMate. All rights reserved.
                </div>
            </div>
        </footer>
    );
};


export default Footer;
