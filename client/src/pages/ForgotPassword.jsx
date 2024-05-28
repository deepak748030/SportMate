import React from 'react';
import Layout from '../components/layouts/Layout';

function ForgotPassword() {
    return (
        <Layout>
            <div className="container d-flex justify-content-center align-items-center min-vh-80 py-4">
                <div className="col-12 col-md-8 col-lg-6 mt-md-5 mt-2 ">
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal fw-bold">Forgot your password?</h1>
                        <p className=' px-2 px-md-5'>
                            Enter the email address associated with your account and we'll send you a link to reset your password.
                        </p>
                    </div>
                    <form>
                        <div className="form-group my-4">
                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" className="form-control mt-2" placeholder="Enter your email" required />
                        </div>
                        <button className="btn btn-dark w-100" type="submit">
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default ForgotPassword;
