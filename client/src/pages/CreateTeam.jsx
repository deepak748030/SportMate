import React from 'react';
import Layout from '../components/layouts/Layout';
import { useNavigate } from 'react-router-dom';
function CreateTeam() {

    const navigate = useNavigate()

    return (
        <Layout title='SPORTS_MATE - CREATE NEW TEAM'>
            <div className='container mt-1 mt-md-3 mb-5'>
                <div className='d-flex justify-content-center ' style={{ marginBottom: '-2rem' }} >
                    <img src='/logo.png' alt="Card image" height={"180rem"} />
                </div>
                <h2 className='text-center mb-5 fw-bold'>Create New Team</h2>
                <form className='row g-3'>
                    <div className='col-md-6'>
                        <label htmlFor='teamName' className='form-label'>Team name *</label>
                        <input type='text' className='form-control' id='teamName' placeholder='Your team name' required />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='clubName' className='form-label'>Club name</label>
                        <input type='text' className='form-control' id='clubName' placeholder='Your club name' />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='sport' className='form-label'>Sport *</label>
                        <input type='text' className='form-control' id='sport' placeholder='Other' required />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='gender' className='form-label'>Gender *</label>
                        <select id='gender' className='form-select' required>
                            <option>Please select</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='ageGroup' className='form-label'>Age group *</label>
                        <select id='ageGroup' className='form-select' required>
                            <option>Please select</option>
                            <option>Under 12</option>
                            <option>Under 16</option>
                            <option>Adult</option>
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='address' className='form-label'>Address *</label>
                        <input type='text' className='form-control' id='address' placeholder='India' required />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='state' className='form-label'>State</label>
                        <input type='text' className='form-control' id='state' placeholder='Maharashtra' />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='city' className='form-label'>City/Town *</label>
                        <input type='text' className='form-control' id='city' placeholder='Mumbai' required />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='timezone' className='form-label'>Timezone *</label>
                        <select id='timezone' className='form-select' required>
                            <option>(GMT+05:30) Mumbai</option>
                            {/* Add more timezones as needed */}
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='hearAbout' className='form-label'>How did you hear about Sports-Mate?</label>
                        <input type='text' className='form-control' id='hearAbout' />
                    </div>
                    <div className='col-12'>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' id='seeContactInfo' />
                            <label className='form-check-label' htmlFor='seeContactInfo'>
                                Allow team members to see each other's contact info
                            </label>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' id='uploadPhotosDocs' />
                            <label className='form-check-label' htmlFor='uploadPhotosDocs'>
                                Allow all team members to upload photos and documents
                            </label>
                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <button type='button' className='btn btn-secondary me-3' onClick={() => { navigate('/user') }} >Cancel</button>
                        <button type='submit' className='btn btn-primary' onClick={() => { navigate('/user') }}>Create Team</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default CreateTeam;
