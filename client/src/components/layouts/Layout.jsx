import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../NavBar';
import Footer from './Footer';

const Layout = ({ children, title = 'SPORTS-MATE', description = 'Default description' }) => {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div style={{ minHeight: '90vh' }}>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;
