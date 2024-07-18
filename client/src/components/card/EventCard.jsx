import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';

function EventCard({ myEventsData, handleClick, orgDash, stats, allEvents, JoinEvent, Modal, userDash, teamDash, admin, acceptEvent, declineEvent }) {
    const navigate = useNavigate();
    const [auth] = useAuth()

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            {/* <h2 className="text-2xl font-bold text-start text-blue-800 mb-4 italic text-danger">CURRENT LEAGUES</h2> */}
            <div className="row">
                {myEventsData.map((event) => (
                    <div
                        key={event._id}
                        className="col-12 col-md-6 mb-4"
                        onClick={() => { orgDash && handleClick(event); }}
                    >
                        <div className="d-flex flex-column p-3 border border-gray-300 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
                            <div className="row">
                                <div className="col-12 d-md-none mb-3">
                                    <img
                                        src={`https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/07/googleMapsTricksHero.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5`}
                                        alt="Map"
                                        className="rounded-md shadow w-100"
                                    />
                                    <a href={`https://maps.google.com/?q=${event.location}`} className="mt-2 text-blue-600 hover:underline d-block" target="_blank" rel="noopener noreferrer">
                                        View larger map
                                    </a>
                                </div>
                                <div className="col-12 col-md-8">
                                    <div className="d-flex flex-column">
                                        <h3 className="text-lg font-semibold text-red-600 text-danger">
                                            <span className="mr-2">+</span>{event.eventName} {event.leagues && <span className='text-danger' style={{ fontSize: '0.75rem' }}>[ LEAGUE ]</span>}
                                        </h3>

                                        <p className="card-text text-muted"><span className="fw-bold">Start Date:</span> {event.startDate}</p>
                                        <p className="card-text text-muted"><span className="fw-bold">Day of the Week:</span> {event.dayOfWeek}</p>
                                        <p className="card-text text-muted"><span className="fw-bold">Team Fee:</span> ${event.teamFee}.00 (Tax incl.)</p>
                                        <p className="card-text text-muted"><span className="fw-bold">Location:</span> {event.location}</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 d-none d-md-block">
                                    <img
                                        src={`https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/07/googleMapsTricksHero.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5`}
                                        alt="Map"
                                        className="rounded-md shadow w-100"
                                    />
                                    <a href={`https://maps.google.com/?q=${event.location}`} className="mt-2 text-blue-600 hover:underline d-block" target="_blank" rel="noopener noreferrer">
                                        View larger map
                                    </a>
                                </div>
                            </div>
                            {stats && (
                                <div className="row mt-3">
                                    <div className="col-6">
                                        <button
                                            className="btn btn-primary w-100"
                                            onClick={() => { navigate(`/event/${event._id}`) }}
                                        >
                                            User Stats
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button
                                            className="btn btn-secondary w-100"
                                            onClick={() => navigate(`/team-stats/${event._id}`)}
                                        >
                                            Team Stats
                                        </button>
                                    </div>
                                </div>
                            )}
                            {userDash && (
                                <div className="d-flex justify-content-between mt-2">
                                    <button className="btn btn-primary" onClick={() => navigate(`/stats/${auth?.user?._id}/${event._id}`)}>View Performance</button>
                                    {/* <button className="btn btn-danger" onClick={() => handleDeleteEvent(event._id)}>Delete</button> */}
                                </div>
                            )}
                            {teamDash && (
                                <div className="d-flex justify-content-between mt-2">
                                    <button className="btn btn-primary" onClick={() => navigate(`/user/team-stats/${event._id}`)}>View Teams</button>
                                    {/* <button className="btn btn-danger" onClick={() => handleDeleteEvent(event._id)}>Delete</button> */}
                                </div>
                            )}
                            {allEvents && (
                                <div className="mt-3">
                                    <button onClick={() => JoinEvent(event)} className="btn btn-warning me-2">
                                        Join Event
                                    </button>
                                    <button onClick={() => Modal(event)} className="btn btn-primary">
                                        Join by Team
                                    </button>
                                </div>
                            )}
                            {admin && (
                                <div className='d-flex gap-3 my-3' >
                                    <button className="btn btn-success btn-sm" onClick={() => acceptEvent(event._id)}>
                                        {event?.accepted ? 'Approved' : 'Approve'}</button>{' '}
                                    <button className="btn btn-danger btn-sm" onClick={() => declineEvent(event._id)}>
                                        {event?.accepted ? 'decline' : 'declined'}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default EventCard;
