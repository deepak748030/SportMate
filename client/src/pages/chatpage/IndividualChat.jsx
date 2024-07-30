import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { socket } from '../../api/socket';
import { useAuth } from '../../context/auth';
import './chat.css'; // Ensure this CSS file is styled properly
import Layout from '../../components/layouts/Layout';

export default function IndividualChat() {
    const { id: receiverId } = useParams(); // Get the receiver's ID from URL params
    const location = useLocation();
    const [auth] = useAuth();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const senderId = auth?.user?._id;

    // Get user data from location state
    const receiverInfo = location.state?.user || {};

    useEffect(() => {
        if (!senderId || !receiverId) return;

        // Register user on connect
        socket.emit('register', senderId);

        // Load previous messages for the current user
        socket.emit('loadMessages', { userId: senderId, chatPartnerId: receiverId });

        // Listen for incoming messages
        socket.on('receiveMessage', (message) => {
            if (message.senderId === senderId || message.receiverId === senderId) {
                setMessages((prevMessages) => [...prevMessages, message]);
            }
        });

        // Load previous messages
        socket.on('loadMessages', (messages) => {
            setMessages(messages.filter(msg =>
                (msg.senderId === senderId && msg.receiverId === receiverId) ||
                (msg.senderId === receiverId && msg.receiverId === senderId)
            ));
        });

        return () => {
            socket.off('receiveMessage');
            socket.off('loadMessages');
        };
    }, [senderId, receiverId]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const messageData = {
                senderId,
                receiverId,
                messageText: message.trim(),
                timestamp: new Date().toISOString(),
            };
            socket.emit('sendMessage', messageData);
            setMessages((prevMessages) => [...prevMessages, messageData]);
            setMessage('');
        }
    };

    return (
        <Layout>
            <div className="container-fluid d-flex flex-column my-1 bg-white border rounded" style={{ maxWidth: '40rem', maxHeight: '90vh' }}>
                <div className="d-flex align-items-center bg-light py-2 border-bottom">
                    {receiverInfo && (
                        <>
                            <img
                                src={"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" || "https://via.placeholder.com/50"}
                                alt={`${receiverInfo.firstName} ${receiverInfo.lastName}`}
                                className="rounded-circle me-3"
                                style={{ width: '50px', height: '50px' }}
                            />
                            <div>
                                <h5 className="mb-0">{receiverInfo.firstName} {receiverInfo.lastName}</h5>
                                <small className="text-muted">
                                    {/* {receiverInfo.email} */}
                                </small>
                            </div>
                        </>
                    )}
                </div>
                <div className="chat-messages-container" style={{ minHeight: '75vh' }}>
                    <div className="flex flex-column gap-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`d-flex my-2 justify-content-${msg.senderId === senderId ? 'start' : 'end'}`}>
                                <div className={`bg-${msg.senderId === senderId ? 'warning' : 'dark'} text-light px-4 py-2 ${msg.senderId === senderId ? 'right' : 'left'}`}>
                                    <p className="mb-0">{msg.messageText}</p>
                                    <small className="text" style={{ color: 'white' }}>
                                        {new Date(msg.timestamp).toLocaleTimeString()}
                                    </small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-dark border-top border-gray-200 p-1">
                    <div className="position-relative">
                        <textarea
                            className="form-control bg-light border-0 text-dark"
                            placeholder="Type your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={1}
                        />
                        <button type="submit" className="btn btn-warning position-absolute top-50 end-0 translate-middle-y" onClick={sendMessage}>
                            <SendIcon className="text-black" />
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

// Assuming you have a separate component for SendIcon
function SendIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    );
}
