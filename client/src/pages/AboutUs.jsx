import React from 'react';
import Layout from '../components/layouts/Layout';


function AboutUs() {
    return (
        <Layout title="SPORTMATE - About Us" description="Learn more about SPORTMATE">
            <div className="container my-5">
                <h1 className="text-center fw-bold text-warning">About Us</h1>
                <div className="mt-4">
                    <section className="mb-5">
                        <h3 className="text-primary">Our Mission</h3>
                        <p>At SPORTMATE, our mission is to connect sports enthusiasts from around the world, providing a platform to organize, manage, and participate in various sports events effortlessly. We aim to foster a vibrant community where people can share their passion for sports, improve their skills, and make lasting connections.</p>
                    </section>

                    <section className="mb-5">
                        <h3 className="text-primary">Our Vision</h3>
                        <p>Our vision is to become the go-to platform for sports event management, promoting healthy living and active lifestyles. We envision a world where everyone, regardless of their background or location, has the opportunity to engage in sports activities and enjoy the numerous benefits they bring.</p>
                    </section>

                    <section className="mb-5">
                        <h3 className="text-primary">Our Story</h3>
                        <p>SPORTMATE was founded by a group of sports enthusiasts who recognized the challenges in organizing and participating in sports events. With a shared passion for sports and a vision to create a seamless experience for sports lovers, we embarked on a journey to develop a comprehensive platform that addresses these challenges and brings the sports community closer together.</p>
                    </section>

                    <section className="mb-5">
                        <h3 className="text-primary">Our Team</h3>
                        <p>Our team comprises dedicated professionals from diverse backgrounds, including technology, sports management, and community building. Each member brings unique expertise and a shared commitment to making SPORTMATE the best platform for sports event management.</p>
                        <div className="team-members mt-3">
                            <div className="row">
                                <div className="col-md-4 text-center">
                                    <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-circle mb-2" />
                                    <h5>John Doe</h5>
                                    <p>Founder & CEO</p>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-circle mb-2" />
                                    <h5>Jane Smith</h5>
                                    <p>Chief Operating Officer</p>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-circle mb-2" />
                                    <h5>Emily Johnson</h5>
                                    <p>Head of Marketing</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-5">
                        <h3 className="text-primary">Join Us</h3>
                        <p>We are always looking for passionate and talented individuals to join our team. If you are interested in being a part of our mission to revolutionize sports event management, please get in touch with us at careers@sportmate.com.</p>
                    </section>
                </div>
            </div>
        </Layout>
    );
}

export default AboutUs;
