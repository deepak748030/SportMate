import React, { useState } from 'react';
import Layout from '../components/layouts/Layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../api/config';
import { useAuth } from '../context/auth';
const timezones = [
    { value: "GMT-04:00", label: "(GMT-04:00) Atlantic Time (Canada)" },
    { value: "GMT-05:00", label: "(GMT-05:00) Eastern Time (US & Canada)" },
    { value: "GMT-06:00", label: "(GMT-06:00) Central Time (US & Canada)" },
    { value: "GMT-07:00", label: "(GMT-07:00) Mountain Time (US & Canada)" },
    { value: "GMT-08:00", label: "(GMT-08:00) Pacific Time (US & Canada)" },
    { value: "GMT-12:00", label: "(GMT-12:00) International Date Line West" },
    { value: "GMT-11:00", label: "(GMT-11:00) Midway Island, Samoa" },
    { value: "GMT-10:00", label: "(GMT-10:00) Hawaii" },
    { value: "GMT-09:00", label: "(GMT-09:00) Alaska" },
    { value: "GMT-03:30", label: "(GMT-03:30) Newfoundland" },
    { value: "GMT-03:00", label: "(GMT-03:00) Greenland" },
    { value: "GMT-02:00", label: "(GMT-02:00) Mid-Atlantic" },
    { value: "GMT-01:00", label: "(GMT-01:00) Azores" },
    { value: "GMT+00:00", label: "(GMT+00:00) London, Lisbon, Casablanca" },
    { value: "GMT+01:00", label: "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris" },
    { value: "GMT+02:00", label: "(GMT+02:00) Kaliningrad, South Africa" },
    { value: "GMT+03:00", label: "(GMT+03:00) Baghdad, Riyadh, Moscow, St. Petersburg" },
    { value: "GMT+03:30", label: "(GMT+03:30) Tehran" },
    { value: "GMT+04:00", label: "(GMT+04:00) Abu Dhabi, Muscat, Baku, Tbilisi" },
    { value: "GMT+04:30", label: "(GMT+04:30) Kabul" },
    { value: "GMT+05:00", label: "(GMT+05:00) Ekaterinburg, Islamabad, Karachi, Tashkent" },
    { value: "GMT+05:30", label: "(GMT+05:30) Mumbai, Kolkata, Chennai, New Delhi" },
    { value: "GMT+05:45", label: "(GMT+05:45) Kathmandu" },
    { value: "GMT+06:00", label: "(GMT+06:00) Almaty, Dhaka, Colombo" },
    { value: "GMT+06:30", label: "(GMT+06:30) Yangon, Cocos Islands" },
    { value: "GMT+07:00", label: "(GMT+07:00) Bangkok, Hanoi, Jakarta" },
    { value: "GMT+08:00", label: "(GMT+08:00) Beijing, Perth, Singapore, Hong Kong" },
    { value: "GMT+09:00", label: "(GMT+09:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk" },
    { value: "GMT+09:30", label: "(GMT+09:30) Adelaide, Darwin" },
    { value: "GMT+10:00", label: "(GMT+10:00) Eastern Australia, Guam, Vladivostok" },
    { value: "GMT+11:00", label: "(GMT+11:00) Magadan, Solomon Islands, New Caledonia" },
    { value: "GMT+12:00", label: "(GMT+12:00) Auckland, Wellington, Fiji, Kamchatka" },
    { value: "GMT+13:00", label: "(GMT+13:00) Nuku'alofa" }
    // Add more timezones as needed
];


function CreateTeam() {
    const [auth] = useAuth();

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
                                required
                            />
                            <label htmlFor="state">State *</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                placeholder="City"
                                value={teamData.city}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="city">City *</label>
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
                                {timezones.map((tz) => (
                                    <option key={tz.value} value={tz.value}>
                                        {tz.label}
                                    </option>
                                ))}
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
                            <label htmlFor="hearAbout">How did you hear about us?</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="seeContactInfo"
                                checked={teamData.seeContactInfo}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="seeContactInfo">
                                Allow members to see contact info
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="uploadPhotosDocs"
                                checked={teamData.uploadPhotosDocs}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="uploadPhotosDocs">
                                Allow members to upload photos and documents
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Create Team</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default CreateTeam;
