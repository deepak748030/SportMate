import React from 'react'
import { NavLink } from 'react-router-dom';

function Chatnav() {
    return (
        <div className="list-group">
            {[
                { name: 'Sofia Davis', message: "hey what's going on? · 2h", img: '/placeholder-user.jpg', fallback: 'OM' },
                { name: 'Alex Johnson', message: 'Just finished a great book! 📚 · 45m', img: '/alex-avatar.jpg', fallback: 'AJ' },
                { name: 'Maria Gonzalez', message: 'Excited for the weekend! · 1h', img: '/maria-avatar.jpg', fallback: 'MG' },
                { name: 'Kevin Brown', message: "Who's up for a movie night? · 3h", img: '/kevin-avatar.jpg', fallback: 'KB' },
                { name: 'Lily White', message: 'Morning coffee is the best! ☕ · 30m', img: '/lily-avatar.jpg', fallback: 'LW' },
                { name: 'Alex Johnson3', message: 'Just finished a great book! 📚 · 45m', img: '/alex-avatar.jpg', fallback: 'AJ' },
                { name: 'Maria Gonzalez5', message: 'Excited for the weekend! · 1h', img: '/maria-avatar.jpg', fallback: 'MG' },
                { name: 'Alex Johnson4', message: 'Just finished a great book! 📚 · 45m', img: '/alex-avatar.jpg', fallback: 'AJ' }
            ].map((user, index) => (
                <NavLink key={index} to={`/chat/${user.name}`} className="list-group-item list-group-item-action d-flex align-items-center gap-3 p-2 rounded">
                    <i className="bi bi-person-circle fs-2 " style={{
                        opacity: '.6'
                    }}></i>
                    <div>
                        <p className="mb-0 fw-bold">{user.name}</p>
                        <p className="mb-0 text-muted small">{user.message}</p>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}

export default Chatnav