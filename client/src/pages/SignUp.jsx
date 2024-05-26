import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Responsive.css'
import Layout from '../components/layouts/Layout';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location, setLocation] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [receiveEmails, setReceiveEmails] = useState(false);
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        axios.get('https://ipapi.co/json/')
            .then(response => {
                setLocation(`${response.data.city}, ${response.data.region}`);
            })
            .catch(error => {
                console.error('There was an error fetching the location!', error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName,
            lastName,
            location,
            birthYear,
            receiveEmails,
            email,
            phoneNumber,
            password
        };
        console.log(formData);

    };

    return (
        <Layout title="SPORTS-MATE - SIGN-UP" description="this is signup page" >
            <div className="container mt-3 mb-5">
                <h1 className="text-center" style={{
                    fontWeight: 'bold'
                }} >Sign Up</h1>
                <form onSubmit={handleSubmit} className='d-flex flex-column gap-2 my-5 ' >
                    <div className="form-group row">
                        <label htmlFor="firstName" className="col-sm-2 col-form-label">
                            First Name <span className="text-danger">*</span>
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control py-md-3 py-lg-2  "
                                id="firstName"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="lastName" className="col-sm-2 col-form-label">
                            Last Name <span className="text-danger">*</span>
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control py-md-3 py-lg-2 "
                                id="lastName"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="location" className="col-sm-2 col-form-label">
                            Location <span className="text-danger">*</span>
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control py-md-3 py-lg-2 "
                                id="location"
                                placeholder="Location"
                                value={location}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="birthYear" className="col-sm-2 col-form-label">
                            Birth Year
                        </label>
                        <div className="col-sm-10">
                            <select
                                className="form-control py-md-3 py-lg-2 "
                                id="birthYear"
                                value={birthYear}
                                onChange={(e) => setBirthYear(e.target.value)}
                            >
                                <option value="">Select your birth year</option>
                                {[...Array(100).keys()].map(i => {
                                    const year = new Date().getFullYear() - i;
                                    return <option key={year} value={year}>{year}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="receiveEmails"
                                    checked={receiveEmails}
                                    onChange={(e) => setReceiveEmails(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="receiveEmails">
                                    I would like to receive Teamer partner emails
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr style={{ border: '1px solid black', margin: '20px 0' }} />

                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">
                            Email <span className="text-danger">*</span>
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="email"
                                className="form-control py-md-3 py-lg-2 "
                                id="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">
                            Phone Number <span className="text-danger">*</span>
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control py-md-3 py-lg-2 "
                                id="phoneNumber"
                                placeholder="99999 99999"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
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
                                className="form-control py-md-3 py-lg-2 "
                                id="password"
                                placeholder="Choose password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="terms"
                                    required
                                />
                                <label className="form-check-label" htmlFor="terms">
                                    Registering agrees to our T&Cs
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row mt-2">
                        <div className="col-sm-10 offset-sm-2">
                            <button type="submit" className="btn btn-success px-sm-5 py-sm-3" style={{
                                fontSize: '1.1rem'
                            }}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Signup;
