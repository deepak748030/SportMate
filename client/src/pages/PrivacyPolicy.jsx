import React from 'react';
import Layout from '../components/layouts/Layout';

function PrivacyPolicy() {
    return (
        <Layout title="SPORTMATE - Privacy Policy" description="This is the privacy policy page">
            <div className="container my-5">
                <h1 className="text-center fw-bold text-warning">Privacy Policy</h1>
                <div className="mt-4">
                    <h3 className="text-primary">Introduction</h3>
                    <p>Welcome to SPORTMATE. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at support@sportmate.com.</p>

                    <h3 className="text-primary">Information We Collect</h3>
                    <p>We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.</p>

                    <h4 className="text-secondary">Personal Data</h4>
                    <ul>
                        <li>Name and Contact Data</li>
                        <li>Credentials</li>
                        <li>Payment Data</li>
                        <li>Profile Data</li>
                    </ul>

                    <h3 className="text-primary">How We Use Your Information</h3>
                    <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>

                    <h4 className="text-secondary">Examples of Use</h4>
                    <ul>
                        <li>To facilitate account creation and logon process</li>
                        <li>To send administrative information to you</li>
                        <li>To fulfill and manage your orders</li>
                        <li>To post testimonials</li>
                    </ul>

                    <h3 className="text-primary">Sharing Your Information</h3>
                    <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>

                    <h4 className="text-secondary">Third-Party Services</h4>
                    <p>We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.</p>

                    <h3 className="text-primary">Data Security</h3>
                    <p>We aim to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>

                    <h3 className="text-primary">Your Privacy Rights</h3>
                    <p>In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</p>

                    <h4 className="text-secondary">Account Information</h4>
                    <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
                    <ul>
                        <li>Log into your account settings and update your user account.</li>
                        <li>Contact us using the contact information provided.</li>
                    </ul>

                    <h3 className="text-primary">Contact Us</h3>
                    <p>If you have questions or comments about this policy, you may email us at support@sportmate.com or by post to:</p>
                    <address>
                        SPORTMATE<br />
                        1234 Sports Avenue<br />
                        City, State, Zip Code
                    </address>
                </div>
            </div>
        </Layout>
    );
}

export default PrivacyPolicy;
