import React from 'react';
import Layout from '../components/layouts/Layout';
import { useNavigate } from 'react-router-dom';

function CreateTeam() {
    const navigate = useNavigate();

    return (
        <Layout title="SPORTS_MATE - CREATE NEW TEAM">
            <div className="container mt-5 mb-5">
                <div className="text-center mb-4">
                    <img src="/logo.png" alt="Logo" height="80" className="mb-3" />
                    <h2 className="fw-bold">Create a New Team</h2>
                    <p className="text-muted">Fill in the details below to set up your team</p>
                </div>
                <form className="row g-4">
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="teamName" placeholder="Team Name" required />
                            <label htmlFor="teamName">Team Name *</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="clubName" placeholder="Club Name" />
                            <label htmlFor="clubName">Club Name</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="sport" placeholder="Sport" required />
                            <label htmlFor="sport">Sport *</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <select className="form-select" id="gender" required>
                                <option value="" disabled selected>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <label htmlFor="gender">Gender *</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <select className="form-select" id="ageGroup" required>
                                <option value="" disabled selected>Select Age Group</option>
                                <option value="Under 12">Under 12</option>
                                <option value="Under 16">Under 16</option>
                                <option value="Adult">Adult</option>
                            </select>
                            <label htmlFor="ageGroup">Age Group *</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="address" placeholder="Address" required />
                            <label htmlFor="address">Address *</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="state" placeholder="State" />
                            <label htmlFor="state">State</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="city" placeholder="City/Town" required />
                            <label htmlFor="city">City/Town *</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <select className="form-select" id="timezone" required>
                                <option value="" disabled selected>Select Timezone</option>
                                <option value="GMT+05:30">(GMT+05:30) Mumbai</option>
                                {/* Add more timezones as needed */}
                            </select>
                            <label htmlFor="timezone">Timezone *</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="hearAbout" placeholder="How did you hear about us?" />
                            <label htmlFor="hearAbout">How did you hear about SportMate?</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="seeContactInfo" />
                            <label className="form-check-label" htmlFor="seeContactInfo">
                                Allow team members to see each other's contact info
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="uploadPhotosDocs" />
                            <label className="form-check-label" htmlFor="uploadPhotosDocs">
                                Allow all team members to upload photos and documents
                            </label>
                        </div>
                    </div>
                    <div className="col-12 text-center mt-4">
                        <button type="button" className="btn btn-secondary me-3" onClick={() => { navigate('/user'); }}>Cancel</button>
                        <button type="submit" className="btn btn-primary" onClick={() => { navigate('/user'); }}>Create Team</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default CreateTeam;
