import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout'
export default function UserDash() {
    const userData = [
        {
            avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
            name: 'Robert Wolf',
            job: 'Engineer',
            email: 'rob_wolf@gmail.com',
            phone: '+44 (452) 886 09 12',
        },
    ];

    const eventData = [
        {
            id: 1,
            event: 'Volleyball Match',
            date: '2023-06-01',
            time: '10:00 AM',
            location: 'Stadium',
            fee: '100$',
            slots: 24,
            availableSlots: 18,
            hostedBy: 'Robert TukKuk',
            banner: 'https://media.istockphoto.com/id/1371823675/photo/bad-shot.jpg?s=612x612&w=0&k=20&c=JK8hNxPDZ1CQKLHCm17-KrLrb0KOcT3D5jbzYtkk40c=',
        },
        {
            id: 2,
            event: 'Volleyball Game',
            date: '2023-06-02',
            time: '12:00 PM',
            location: 'Arena',
            fee: '50$',
            slots: 30,
            availableSlots: 25,
            hostedBy: 'Jane Doe',
            banner: 'https://media.istockphoto.com/id/1371823675/photo/bad-shot.jpg?s=612x612&w=0&k=20&c=JK8hNxPDZ1CQKLHCm17-KrLrb0KOcT3D5jbzYtkk40c=',
        },
    ];

    return (
        <Layout>
            <div className="container-fluid bg-light p-4 md:p-8 lg:p-12">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-4">
                            {userData.map((user, index) => (
                                <div className="card mb-4" key={index}>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <img src={user.avatar} className="rounded-circle me-3" alt={user.name} style={{ width: '64px', height: '64px' }} />
                                            <div>
                                                <h5 className="card-title mb-1">{user.name}</h5>
                                                <p className="card-text text-muted">{user.job}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex flex-column flex-sm-row justify-content-between">
                                            <div className="d-flex align-items-center mb-2">
                                                <MailOpenIcon className="me-2" />
                                                <span>{user.email}</span>
                                            </div>
                                            <div className="d-flex align-items-center mb-2">
                                                <PhoneIcon className="me-2" />
                                                <span>{user.phone}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Upcoming Events</h5>
                                    {eventData.map((event) => (
                                        <div className="row mb-4" key={event.id}>
                                            <div className="col-md-4">
                                                <img src={event.banner} alt="Event Banner" className="img-fluid rounded" />
                                            </div>
                                            <div className="col-md-8">
                                                <h6 className="mt-2">{event.event}</h6>
                                                <div className="d-flex flex-column flex-sm-row justify-content-between">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <CalendarIcon className="me-2" />
                                                        <span>{event.date}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-2">
                                                        <ClockIcon className="me-2" />
                                                        <span>{event.time}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column flex-sm-row justify-content-between">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <MapPinIcon className="me-2" />
                                                        <span>{event.location}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-2">
                                                        <DollarSignIcon className="me-2" />
                                                        <span>{event.fee}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column flex-sm-row justify-content-between">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <UsersIcon className="me-2" />
                                                        <span>{event.availableSlots} / {event.slots}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-2">
                                                        <UserIcon className="me-2" />
                                                        <span>{event.hostedBy}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Quick Links</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <Link to="/chat" className="text-decoration-none text-muted">
                                                <ChatIcon className="me-2" />
                                                Chat
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/attendees" className="text-decoration-none text-muted">
                                                <UsersIcon className="me-2" />
                                                View Attendees
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/settings" className="text-decoration-none text-muted">
                                                <SettingsIcon className="me-2" />
                                                Settings
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

function CalendarIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    );
}

function ClockIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}

function DollarSignIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" x2="12" y1="1" y2="23" />
            <path d="M17 5H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H7" />
        </svg>
    );
}

function MailOpenIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8l9-6 9 6" />
            <path d="M21 22H3V8l9 6 9-6z" />
        </svg>
    );
}

function MapPinIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 8-9 12-9 12s-9-4-9-12a9 9 0 1 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function PhoneIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92V20a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.08A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3.09a2 2 0 0 1 2 1.72 13 13 0 0 0 .74 2.81 2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 4.18 4.18l1.28-1.28a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.74A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function SettingsIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-.33V3a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1h.09a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
    );
}


function UserIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
}

function UsersIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function ChatIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    );
}
