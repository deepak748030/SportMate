import React, { useState } from 'react';
import Layout from '../components/layouts/Layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../api/config'
import { useAuth } from '../context/auth';


function CreateTeam() {
    const [auth] = useAuth()

    const navigate = useNavigate();
    const [teamData, setTeamData] = useState({
        user: auth?.user?._id,
        teamName: '',
        clubName: '',
        sport: '',
        gender: '',
        ageGroup: '',
        address: '',
        state: '',
        city: '',
        timezone: '',
        hearAbout: '',
        seeContactInfo: false,
        uploadPhotosDocs: false
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setTeamData(prevState => ({
            ...prevState,
            [id]: type === 'checkbox' ? checked : type === 'number' ? parseInt(value) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${apiUrl}/create-team`, teamData);
            console.log('Team created:', response.data);
            setTimeout(() => {
                navigate('/myteams');
            }, 2000);
        } catch (error) {
            console.error('Error creating team:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    return (
        <Layout title="SPORTS_MATE - CREATE NEW TEAM">
            <div className="container mt-5 mb-5">
                <div className="text-center mb-4">
                    <img src="/logo.png" alt="Logo" height="80" className="mb-3" />
                    <h2 className="fw-bold">Create a New Team</h2>
                    <p className="text-muted">Fill in the details below to set up your team</p>
                </div>
                <form className="row g-4" onSubmit={handleSubmit}>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="teamName"
                                placeholder="Team Name"
                                value={teamData.teamName}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="teamName">Team Name *</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="clubName"
                                placeholder="Club Name"
                                value={teamData.clubName}
                                onChange={handleChange}
                            />
                            <label htmlFor="clubName">Club Name</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="sport"
                                placeholder="Sport"
                                value={teamData.sport}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="sport">Sport *</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <select
                                className="form-select"
                                id="gender"
                                value={teamData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <label htmlFor="gender">Gender *</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <select
                                className="form-select"
                                id="ageGroup"
                                value={teamData.ageGroup}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Age Group</option>
                                <option value="Under 12">Under 12</option>
                                <option value="Under 16">Under 16</option>
                                <option value="Adult">Adult</option>
                            </select>
                            <label htmlFor="ageGroup">Age Group *</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                placeholder="Address"
                                value={teamData.address}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="address">Address *</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                placeholder="State"
                                value={teamData.state}
                                onChange={handleChange}
                            />
                            <label htmlFor="state">State</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                placeholder="City/Town"
                                value={teamData.city}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="city">City/Town *</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <select
                                className="form-select"
                                id="timezone"
                                value={teamData.timezone}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Timezone</option>
                                <option value="GMT+05:30">(GMT+05:30) Mumbai</option>
                                {/* Add more timezones as needed */}
                            </select>
                            <label htmlFor="timezone">Timezone *</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="hearAbout"
                                placeholder="How did you hear about us?"
                                value={teamData.hearAbout}
                                onChange={handleChange}
                            />
                            <label htmlFor="hearAbout">How did you hear about SportMate?</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="seeContactInfo"
                                checked={teamData.seeContactInfo}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="seeContactInfo">
                                Allow team members to see each other's contact info
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="uploadPhotosDocs"
                                checked={teamData.uploadPhotosDocs}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="uploadPhotosDocs">
                                Allow all team members to upload photos and documents
                            </label>
                        </div>
                    </div>
                    <div className="col-12 text-center mt-4">
                        <button
                            type="button"
                            className="btn btn-secondary me-3"
                        // onClick={() => navigate('/user')}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Create Team
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default CreateTeam;
