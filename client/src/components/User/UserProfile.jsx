import React from 'react'
import { useAuth } from '../../context/auth';

function UserProfile() {

    const [auth] = useAuth();
    // console.log(auth?.user)
    const organizerData = [
        {
            avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
            name: `${auth?.user?.firstName} ${auth?.user?.lastName} ` || 'Robert Wolfkisser',
            job: auth?.user?.role || 'Event Organizer',
            email: auth?.user?.email || 'rob_wolf@gmail.com',
            phone: auth?.user?.phoneNumber || '+44 (452) 886 09 12',
        },
    ];

    return (
        <>

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
                        <div className=" d-flex flex-column flex-sm-row justify-content-between">
                            <div className="d-flex align-items-center mb-2">
                                <i className="bi bi-envelope-fill me-2"></i>
                                <span>{organizer.email}</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <i className="bi bi-telephone-fill me-2"></i>
                                <span>{organizer.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default UserProfile