import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout';

export default function UserDash() {
    const userData = {
        avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
        name: 'Robert Wolf',
        job: 'Engineer',
        email: 'rob_wolf@gmail.com',
        phone: '+44 (452) 886 09 12',
    };

    const myEventsData = [
        {
            _id: 1,
            eventName: 'Football Tournament',
            date: '2023-06-01',
            time: '10:00 AM',
            place: 'Stadium',
            price: '100$',
            numTeams: 10,
            user: { firstName: 'John' },
            winningPrize: '500$',
        },
        {
            _id: 2,
            eventName: 'Basketball Game',
            date: '2023-06-02',
            time: '12:00 PM',
            place: 'Arena',
            price: '50$',
            numTeams: 8,
            user: { firstName: 'Alice' },
            winningPrize: '300$',
        },
    ];

    const handleEditEvent = (event) => {
        // Handle event edit logic here
        console.log("Editing event:", event);
    };

    return (
        <Layout>
            <div className="container-fluid bg-light p-4 md:p-8 lg:p-12">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12 mb-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <img src={userData.avatar} className="rounded-circle me-3" alt={userData.name} style={{ width: '64px', height: '64px' }} />
                                        <div>
                                            <h5 className="card-title mb-1">{userData.name}</h5>
                                            <p className="card-text text-muted">{userData.job}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex flex-column flex-sm-row justify-content-between">
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="bi bi-envelope-open-fill me-2"></i>
                                            <span>{userData.email}</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="bi bi-phone-fill me-2"></i>
                                            <span>{userData.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {myEventsData.map(({ _id, date, eventName, numTeams, place, price, time, user, winningPrize }) => (
                                <div className="card mb-4" key={_id} onClick={() => handleEditEvent({ _id, eventName, place, date, time, price, numTeams, user, winningPrize })}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={'https://media.istockphoto.com/id/1904589046/photo/two-adult-football-players-running-and-kicking-a-soccer-ball-legs-of-two-young-football.jpg?s=2048x2048&w=is&k=20&c=CSTkGc00q6A1VXG8YaHuBbLO58EeHFHkM5uEPoyMYZc='} alt="Event Banner" className="img-fluid rounded" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{eventName}</h5>
                                                <div className="row">
                                                    <div className="col-6 d-flex align-items-center mb-2">
                                                        <i className="bi bi-calendar-fill me-2"></i>
                                                        <span>{date.slice(0, 10)}</span>
                                                    </div>
                                                    <div className="col-6 d-flex align-items-center mb-2">
                                                        <i className="bi bi-clock-fill me-2"></i>
                                                        <span>{time}</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 d-flex align-items-center mb-2">
                                                        <i className="bi bi-geo-alt-fill me-2"></i>
                                                        <span>{place}</span>
                                                    </div>
                                                    <div className="col-6 d-flex align-items-center mb-2">
                                                        <i className="bi bi-currency-dollar me-2"></i>
                                                        <span>{price}</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 d-flex align-items-center mb-2">
                                                        <i className="bi bi-people-fill me-2"></i>
                                                        <span>{numTeams} / {numTeams}</span>
                                                    </div>
                                                    <div className="col-6 d-flex align-items-center mb-2">
                                                        <i className="bi bi-person-fill me-2"></i>
                                                        <span>{user?.firstName}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Quick Links</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <Link to="/chat" className="text-decoration-none text-muted">
                                                <i className="bi bi-chat-dots-fill me-2"></i>
                                                Chat
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/attendees" className="text-decoration-none text-muted">
                                                <i className="bi bi-people-fill me-2"></i>
                                                View Attendees
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/settings" className="text-decoration-none text-muted">
                                                <i className="bi bi-gear-fill me-2"></i>
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
