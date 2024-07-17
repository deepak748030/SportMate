import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventDetailsCard({ event, handleUserStats, handleTeamStats }) {
    return (
        <div className="card mb-4" key={event._id}>
            <div className="card-body">
                <h5 className="card-title">{event.eventName}</h5>
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src={'https://media.istockphoto.com/id/1904589046/photo/two-adult-football-players-running-and-kicking-a-soccer-ball-legs-of-two-young-football.jpg?s=2048x2048&w=is&k=20&c=CSTkGc00q6A1VXG8YaHuBbLO58EeHFHkM5uEPoyMYZc='}
                            alt="Event Banner"
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="row my-3">
                            <div className="col-6 d-flex align-items-center mb-2">
                                <i className="bi bi-calendar-fill me-2"></i>
                                <span>{event.date ? event.date.slice(0, 10) : 'Date not available'}</span>
                            </div>
                            <div className="col-6 d-flex align-items-center mb-2">
                                <i className="bi bi-clock-fill me-2"></i>
                                <span>{event.time || 'Time not available'}</span>
                            </div>
                            <div className="col-6 d-flex align-items-center mb-2">
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                <span>{event.place || 'Place not available'}</span>
                            </div>
                            <div className="col-6 d-flex align-items-center mb-2">
                                <i className="bi bi-people-fill me-2"></i>
                                <span>{event.numTeams ? `${event.numTeams} Teams` : 'Teams not available'}</span>
                            </div>
                            <div className="col-6 d-flex align-items-center mb-2">
                                <i className="bi bi-currency-dollar me-2"></i>
                                <span>{event.price ? `${event.price}` : 'Price not available'}</span>
                            </div>
                            <div className="col-6 d-flex align-items-center mb-2">
                                <i className="bi bi-trophy-fill me-2"></i>
                                <span>{event.winningPrize ? `${event.winningPrize} $ Prize` : 'Prize not available'}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <button
                            className="btn btn-primary w-100"
                            onClick={() => handleUserStats(event._id)}
                        >
                            User Stats
                        </button>
                    </div>
                    <div className="col-6">
                        <button
                            className="btn btn-secondary w-100"
                            onClick={() => handleTeamStats(event._id)}
                        >
                            Team Stats
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDetailsCard;
