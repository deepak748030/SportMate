import React from 'react';
import Layout from '../../components/layouts/Layout';
import Chatnav from '../../components/chat/Chatnav';

export default function Singlechat() {
    return (
        <Layout>
            <div className="container d-flex flex-column flex-md-row border rounded overflow-hidden max-w-4xl w-100 p-0 mt-md-5">
                <div className="bg-light p-3 border-end d-none d-md-flex flex-column flex-shrink-0  " style={{ minWidth: '300px' }}>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="fw-bold">Messenger</div>
                        <Button className="btn btn-outline-secondary rounded-circle p-2">
                            <PenIcon className="bi bi-pencil" />
                            <span className="visually-hidden">New message</span>
                        </Button>
                    </div>
                    <div className="mb-4">
                        <form>
                            <input type="text" className="form-control" placeholder="Search" />
                        </form>
                    </div>
                    <Chatnav />
                </div>
                <div className="flex-grow-1">
                    <div className="p-3 d-flex border-bottom align-items-center">
                        <div className="d-flex align-items-center gap-2">
                            <i className="bi bi-person-circle fs-1 " style={{
                                opacity: '.6'
                            }}></i>
                            <div>
                                <p className="mb-0 fw-bold">Sofia Davis</p>
                                <p className="mb-0 text-muted small">Active 2h ago</p>
                            </div>
                        </div>
                        <div className="ms-auto d-flex align-items-center gap-2">
                            <Button className="btn btn-outline-secondary rounded-circle p-2">
                                <span className="visually-hidden">Call</span>
                                <PhoneIcon className="bi bi-telephone" />
                            </Button>
                            <Button className="btn btn-outline-secondary rounded-circle p-2">
                                <span className="visually-hidden">Video call</span>
                                <VideoIcon className="bi bi-camera-video" />
                            </Button>
                        </div>
                    </div>
                    <div className="p-3 d-flex flex-column gap-4" style={{ height: "60vh" }}>
                        {[
                            { message: "Hey hope you're doing well! We should catch up sometime soon. 🙏", align: 'end', bgColor: 'bg-dark text-white' },
                            { message: "Sure! I'm free this weekend if you want to grab a coffee.", align: 'start', bgColor: 'bg-light' },
                            {
                                message: <img alt="photo" className="img-fluid rounded" src="/placeholder.svg" style={{ maxWidth: '200px' }} />,
                                align: 'end',
                                bgColor: '',
                            },
                            { message: "Sounds good! Let's meet at the Starbucks on 5th Ave.", align: 'end', bgColor: 'bg-dark text-white' },
                            { message: "I'll message you on Saturday.", align: 'start', bgColor: 'bg-light' },
                        ].map((msg, index) => (
                            <div key={index} className={`d-flex flex-column align-self-${msg.align} rounded p-2 ${msg.bgColor}`}>
                                <div>{msg.message}</div>
                            </div>
                        ))}
                    </div>
                    <div className="border-top p-3">
                        <form className="d-flex w-100 align-items-center">
                            <input type="text" className="form-control me-2" placeholder="Type your message..." />
                            <Button className="btn btn-primary" type="submit">
                                <span className="visually-hidden">Send</span>
                                <SendIcon className="bi bi-send" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

function PenIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        </svg>
    );
}

function PhoneIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function SendIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    );
}

function VideoIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
        </svg>
    );
}


function Button({ className, children, ...props }) {
    return (
        <button className={`btn ${className}`} {...props}>
            {children}
        </button>
    );
}

