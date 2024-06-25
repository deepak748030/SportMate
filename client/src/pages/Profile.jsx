import React, { useState, useEffect } from 'react';
import Layout from '../components/layouts/Layout';
import { useAuth } from '../context/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import apiUrl from '../api/config'

export default function Profile() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [photoFile, setPhotoFile] = useState(null);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        setFormData({
            userId: auth?.user?._id,
            firstName: auth?.user?.firstName || '',
            lastName: auth?.user?.lastName || '',
            phoneNumber: auth?.user?.phoneNumber || '',
            email: auth?.user?.email || '',
            password: '',
            birthYear: auth?.user?.birthYear || '',
            gender: auth?.user?.gender || '',
            location: auth?.user?.location || '',
            avatar: auth?.user?.avatar || '',
        });
    }, [auth]);

    const [formData, setFormData] = useState({
        userId: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        birthYear: '',
        gender: '',
        location: '',
        avatar: ''
    });

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedPhoto(reader.result);
                setPhotoFile(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Ensure that the user ID is set in the formData state
            if (!formData.userId) {
                console.error('User ID is missing');
                toast.error('User ID is missing');
                return;
            }

            const updateData = new FormData();
            Object.keys(formData).forEach(key => {
                updateData.append(key, formData[key]);
            });

            if (photoFile) {
                updateData.append('avatar', photoFile);
            }

            const response = await axios.put(`${apiUrl}/profile`, updateData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data) {
                setAuth({
                    ...auth,
                    user: response?.data,
                    token: auth?.token
                });
                await localStorage.removeItem("auth");
                // Store the updated auth object in local storage
                await localStorage.setItem('auth', JSON.stringify({
                    user: response.data,
                    token: auth.token
                }));
                toast.success('Profile updated successfully!');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('Failed to update profile');
        }
    };


    return (
        <Layout>
            <form className="container py-2" onSubmit={handleSubmit}>
                <div className="card w-full max-w-3xl mx-auto">
                    <div className="card-header">
                        <h5 className="card-title">Edit Profile</h5>
                        <p className="card-description">Update your personal information.</p>
                    </div>
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" value={formData.firstName} onChange={handleChange} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" value={formData.lastName} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="phone" value={formData.phoneNumber} onChange={handleChange} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} autoComplete='password' />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="birthYear" className="form-label">Birth Year</label>
                                <select className="form-select" id="birthYear" value={formData.birthYear} onChange={handleChange}>
                                    {Array.from({ length: 50 }, (_, i) => 1970 + i).map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="male">Male</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="female" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="other" value="other" checked={formData.gender === 'other'} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="other">Other</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="location" className="form-label">Location</label>
                                <input type="text" className="form-control" id="location" value={formData.location} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between flex-column flex-md-row mt-5 gap-5">
                        <div className="d-flex align-items-center gap-4">
                            <div className="avatar">
                                <img src={selectedPhoto || (formData.avatar ? `http://localhost:3000/${formData.avatar}` : "/logo.png")} alt="no img" className="rounded-circle " height={'60rem'} width={'60rem'} />
                            </div>
                            <label className="btn btn-outline-secondary">

                                Change Photo
                                <input type="file" accept="image/*" onChange={handlePhotoChange} hidden />
                            </label>
                        </div>
                        <button type="submit" className="btn btn-warning align-self-center">Save Changes</button>
                    </div>
                </div>
            </form>
        </Layout>
    );
}
