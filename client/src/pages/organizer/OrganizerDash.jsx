import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout';

export default function OrganizerDash() {
    const organizerData = [
        {
            avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
            name: 'Robert Wolfkisser',
            job: 'Event Organizer',
            email: 'rob_wolf@gmail.com',
            phone: '+44 (452) 886 09 12',
        },
    ];

    const myEventData = [
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
                            {organizerData.map((organizer, index) => (
                                <div className="card mb-4" key={index}>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <img src={organizer.avatar} className="rounded-circle me-3" alt={organizer.name} style={{ width: '64px', height: '64px' }} />
                                            <div>
                                                <h5 className="card-title mb-1">{organizer.name}</h5>
                                                <p className="card-text text-muted">{organizer.job}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex flex-column flex-sm-row justify-content-between">
                                            <div className="d-flex align-items-center mb-2">
                                                <MailOpenIcon className="me-2" />
                                                <span>{organizer.email}</span>
                                            </div>
                                            <div className="d-flex align-items-center mb-2">
                                                <PhoneIcon className="me-2" />
                                                <span>{organizer.phone}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">My Events</h5>
                                    {myEventData.map((event) => (
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
                            <div className="card mt-4">
                                <div className="card-body">
                                    <h5 className="card-title">Upload Event</h5>
                                    <Link to="/upload-event" className="btn btn-primary">
                                        <TicketIcon className="me-2" />
                                        Upload New Event
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Quick Links</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <Link to="/group-chat" className="text-decoration-none text-muted">
                                                <ChatIcon className="me-2" />
                                                Group Chat
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

function SettingsIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-.33V3a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1h.09a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
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
            <path d="M3 8l9-6 9 6-9 6-9-6z" />
            <path d="M21 22H3a2 2 0 0 1-2-2V8a2 2 0 0 1 1-1.73" />
            <path d="M3 8v13h18V8" />
        </svg>
    );
}

function MapPinIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 5.25-9 12-9 12s-9-6.75-9-12a9 9 0 1 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function PhoneIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.68 19.68 0 0 1 3 3.18 2 2 0 0 1 5 1h4.09a2 2 0 0 1 2 1.72 13.47 13.47 0 0 0 .48 2.79 2 2 0 0 1-.45 2L10 8.91a16 16 0 0 0 6.09 6.09l1.4-1.4a2 2 0 0 1 2-.45 13.47 13.47 0 0 0 2.79.48 2 2 0 0 1 1.72 2.07z" />
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
            <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M9 21v-2a4 4 0 0 1 3-3.87" />
            <circle cx="12" cy="7" r="4" />
            <path d="M3 21v-2a4 4 0 0 1 3-3.87" />
            <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
            <circle cx="16.5" cy="3.5" r="4" />
            <circle cx="7.5" cy="3.5" r="4" />
        </svg>
    );
}

function TicketIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10h-6.18A3 3 0 0 0 13 7.82V2H7a2 2 0 0 0-2 2v6.18A3 3 0 0 0 2.82 13H2v4h.82A3 3 0 0 0 5 16.18V22h6v-6.18A3 3 0 0 0 13 13h6v-6h-6.18A3 3 0 0 0 16.18 2H22v8z" />
        </svg>
    );
}

function ChatIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2z" />
        </svg>
    );
}
