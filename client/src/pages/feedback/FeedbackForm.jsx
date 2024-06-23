import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout'
const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send feedback to server)
        alert('Feedback submitted!');
        setFeedback(''); // Clear feedback text after submission
        setSubmitted(true); // Mark as submitted
        setShowModal(false); // Close modal after submission
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <Layout>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        {!submitted && (
                            <>
                                <h2 className='fw-bold text-warning'>SportsMate Feedback</h2>
                                <p>We'd love to hear what went well or how we can improve the product experience.</p>
                                <button className="btn btn-outline-warning" onClick={openModal}>
                                    Leave Feedback
                                </button>
                            </>
                        )}
                        {submitted && (
                            <>
                                <h2 className='fw-bold text-warning my-1'>Thank you for your feedback!</h2>
                                <p>Your input helps us improve.</p>
                            </>
                        )}
                    </div>
                </div>

                {/* Modal */}
                {showModal && (
                    <div className="modal d-block" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header d-flex justify-between ">
                                    <h5 className="modal-title">Leave Feedback</h5>
                                    <button type="button" className="close" style={{
                                        marginLeft: 'auto'
                                    }} onClick={closeModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <textarea
                                                className="form-control"
                                                rows="5"
                                                placeholder="Enter your feedback here"
                                                value={feedback}
                                                onChange={handleInputChange}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="text-center m-3 fs-3">
                                            <span
                                                role="img"
                                                aria-label="smile emoji"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => setFeedback((prev) => prev + ' 🙂')}
                                            >
                                                😊
                                            </span>
                                            <span
                                                role="img"
                                                aria-label="heart emoji"
                                                style={{ cursor: 'pointer', marginLeft: '10px' }}
                                                onClick={() => setFeedback((prev) => prev + ' ❤️')}
                                            >
                                                ❤️
                                            </span>
                                            <span
                                                role="img"
                                                aria-label="thumbs up emoji"
                                                style={{ cursor: 'pointer', marginLeft: '10px' }}
                                                onClick={() => setFeedback((prev) => prev + ' 👍')}
                                            >
                                                👍
                                            </span>
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100">
                                            Submit Feedback
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* End Modal */}
            </div>
        </Layout>
    );
};

export default FeedbackForm;
