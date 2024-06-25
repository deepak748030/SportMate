import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layouts/Layout';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import apiUrl from '../../api/config'
import { useAuth } from '../../context/auth'
import { toast } from 'react-toastify';



export default function OrganizerDash() {

    const [auth, setAuth] = useAuth();

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const [eventName, setEventName] = useState('');
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [price, setPrice] = useState('');
    const [numTeams, setNumTeams] = useState('');
    const [winningPrize, setWinningPrize] = useState('');

    const [myEventsData, setEventsData] = useState([])

    // console.log(user)


    const handleSaveChanges = async (e) => {

        try {
            const user = await auth?.user?._id;
            const priceNum = parseFloat(price);
            const winningPrizeNum = parseFloat(winningPrize);
            const numTeamsNum = parseFloat(numTeams)
            const res = await axios.post(`${apiUrl}/create`, {
                user: user,
                eventName,
                place,
                date,
                time,
                price: priceNum,
                numTeams: numTeamsNum,
                winningPrize: winningPrizeNum
            })
            if (res?.data) {
                handleClose();
                toast.success('event created')
                await getData()
                console.log(myEventsData)

            }


        } catch (error) {
            console.log(error)
        }
    };

    const getData = async () => {
        try {
            const res = await axios.get(`${apiUrl}/events`);
            // console.log('res:', res)
            if (res?.data) {
                await setEventsData(res?.data)



            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])


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
                                    {myEventsData.map(({ date, eventName, numTeams, place, price, time, _id, user }) => (
                                        <div className="row mb-4" key={_id}>
                                            <div className="col-md-4">
                                                <img src={'https://media.istockphoto.com/id/1904589046/photo/two-adult-football-players-running-and-kicking-a-soccer-ball-legs-of-two-young-football.jpg?s=2048x2048&w=is&k=20&c=CSTkGc00q6A1VXG8YaHuBbLO58EeHFHkM5uEPoyMYZc='} alt="Event Banner" className="img-fluid rounded" />
                                            </div>
                                            <div className="col-md-8">
                                                <h6 className="mt-2">{eventName}</h6>
                                                <div className="d-flex flex-column flex-sm-row justify-content-between">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <CalendarIcon className="me-2" />
                                                        <span>{date.slice(0, 10)}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-2">
                                                        <ClockIcon className="me-2" />
                                                        <span>{time}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column flex-sm-row justify-content-between">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <MapPinIcon className="me-2" />
                                                        <span>{place}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-2">
                                                        <DollarSignIcon className="me-2" />
                                                        <span>{price}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column flex-sm-row justify-content-between">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <UsersIcon className="me-2" />
                                                        <span>{numTeams} / {numTeams}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-2">
                                                        <UserIcon className="me-2" />
                                                        <span>{user.firstName}</span>
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
                                    <Button variant="primary" onClick={handleShow}>
                                        <TicketIcon className="me-2" />
                                        Upload New Event
                                    </Button>
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

            {/* Modal for Uploading Event */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="eventName">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter event name"
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="place">
                            <Form.Label>Place</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter event place"
                                value={place}
                                onChange={(e) => setPlace(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="time">
                            <Form.Label>Event Time</Form.Label>
                            <Form.Control
                                type="time"
                                placeholder="Enter event time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter event price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="numTeams">
                            <Form.Label>Number of Teams</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter number of teams"
                                value={numTeams}
                                onChange={(e) => setNumTeams(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="winningPrize">
                            <Form.Label>Winning Prize</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter winning prize"
                                value={winningPrize}
                                onChange={(e) => setWinningPrize(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Layout>
    );
}

function SettingsIcon(props) {
    return <i className="bi bi-gear-fill" {...props}></i>;
}

function MailOpenIcon(props) {
    return <i className="bi bi-envelope-fill" {...props}></i>;
}

function PhoneIcon(props) {
    return <i className="bi bi-telephone-fill" {...props}></i>;
}

function TicketIcon(props) {
    return <i className="bi bi-ticket-fill" {...props}></i>;
}

function CalendarIcon(props) {
    return <i className="bi bi-calendar-fill" {...props}></i>;
}

function ClockIcon(props) {
    return <i className="bi bi-clock-fill" {...props}></i>;
}

function MapPinIcon(props) {
    return <i className="bi bi-geo-alt-fill" {...props}></i>;
}

function DollarSignIcon(props) {
    return <i className="bi bi-currency-dollar" {...props}></i>;
}

function UsersIcon(props) {
    return <i className="bi bi-people-fill" {...props}></i>;
}

function UserIcon(props) {
    return <i className="bi bi-person-fill" {...props}></i>;
}

function ChatIcon(props) {
    return <i className="bi bi-chat-fill" {...props}></i>;
}
