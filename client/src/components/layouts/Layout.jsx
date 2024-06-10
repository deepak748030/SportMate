import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../NavBar';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children, title = 'SportMate', description = 'Default description' }) => {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <ToastContainer />
            <div style={{ minHeight: '90vh' }}>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;
