import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer className='w-100 text-center py-5' style={{ backgroundColor: '#002b5c', color: '#FFFFFF' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5>Sportmate</h5>
                        <p>Your ultimate sports companion</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className='list-unstyled'>
                            <li><Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Home</Link></li>
                            <li><Link to="/sports" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Sports</Link></li>
                            <li><Link to="/about" style={{ color: '#FFFFFF', textDecoration: 'none' }}>About Us</Link></li>
                            <li><Link to="/advertising" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Advertising</Link></li>
                            <li><Link to="/support" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Support</Link></li>
                            <li><Link to="/privacy" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Follow Us</h5>
                        <div className='d-flex justify-content-center'>
                            <a href="https://facebook.com" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}><i className="bi bi-facebook"></i></a>
                            <a href="https://twitter.com" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}><i className="bi bi-twitter"></i></a>
                            <a href="https://instagram.com" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}><i className="bi bi-instagram"></i></a>
                            <a href="https://linkedin.com" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <p>© Sportmate Ltd 2024</p>
                        <p>Sportmate Ltd registered in England | Company number - 12345678</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
