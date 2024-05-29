import React, { useState } from 'react';
import Layout from '../components/layouts/Layout';

export default function Profile() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Layout>
            <form className="container py-2">
                <div className="card w-full max-w-3xl mx-auto">
                    <div className="card-header">
                        <h5 className="card-title">Edit Profile</h5>
                        <p className="card-description">Update your personal information.</p>
                    </div>
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" defaultValue="John" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" defaultValue="Doe" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="phone" defaultValue="+1 (555) 555-5555" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" defaultValue="john@example.com" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" autoComplete='password' />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="birthYear" className="form-label">Birth Year</label>
                                <select className="form-select" id="birthYear" defaultValue="1990">
                                    <option value="1990">1990</option>
                                    <option value="1991">1991</option>
                                    <option value="1992">1992</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="male" defaultChecked />
                                    <label className="form-check-label" htmlFor="male">Male</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="female" />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="other" />
                                    <label className="form-check-label" htmlFor="other">Other</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select className="form-select" id="country" defaultValue="usa">
                                    <option value="usa">United States</option>
                                    <option value="can">Canada</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="aus">Australia</option>
                                    <option value="nzl">New Zealand</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="state" className="form-label">State</label>
                                <select className="form-select" id="state" defaultValue="ca">
                                    <option value="ca">California</option>
                                    <option value="ny">New York</option>
                                    <option value="tx">Texas</option>
                                    <option value="fl">Florida</option>
                                    <option value="il">Illinois</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="city" className="form-label">City</label>
                                <input type="text" className="form-control" id="city" defaultValue="San Francisco" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="hideContact" />
                                    <label className="form-check-label" htmlFor="hideContact">Hide Contact Info</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="receiveEmail" defaultChecked />
                                    <label className="form-check-label" htmlFor="receiveEmail">Receive Email Messages</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between flex-column flex-md-row mt-5 gap-5">
                        <div className="d-flex align-items-center gap-4">
                            <div className="avatar">
                                <img src={selectedPhoto || "/placeholder-avatar.jpg"} alt="no img" className="rounded-circle " height={'60rem'} width={'60rem'} />
                            </div>
                            <label className="btn btn-outline-secondary">
                                <i className="bi bi-upload mr-2"></i>
                                Update Photo
                                <input type="file" onChange={handlePhotoChange} style={{ display: 'none' }} />
                            </label>
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                            <button className="btn btn-outline-secondary">Cancel</button>
                            <button className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    );
}
