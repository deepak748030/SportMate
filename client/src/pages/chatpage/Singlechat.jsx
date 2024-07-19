import React, { useState, useEffect } from 'react';
import Layout from '../../components/layouts/Layout';
import { connectSocket, disconnectSocket, sendMessage, socket } from '../../api/socket'; // Adjust import path as needed
import './chat.css';
import { useAuth } from '../../context/auth';

export default function SingleChat() {
    const [auth] = useAuth();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const userId = auth?.user?._id;

    useEffect(() => {
        connectSocket();

        // Clean up on unmount
        return () => disconnectSocket();
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const text = {
                userId,
                message,
            };
            sendMessage(text);
            setMessage('');

        }
    };

    useEffect(() => {
        const receiveMessage = (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        };

        socket.on('receiveMessage', receiveMessage);

        const receiveInitialMessages = (initialMessages) => {
            setMessages(initialMessages);
        };

        socket.on('initialMessages', receiveInitialMessages);

        return () => {
            socket.off('receiveMessage', receiveMessage);
            socket.off('initialMessages', receiveInitialMessages);
        };
    }, []); // Ensure the dependency array is empty to run only once

    return (
        <Layout>
            <form onSubmit={handleSendMessage}>
                <div className="container-fluid d-flex flex-column my-1 bg-white border rounded" style={{ maxWidth: '40rem', maxHeight: '90vh' }}>
                    <div className="flex-1 overflow-auto py-1">
                        <div className="flex flex-column gap-4" style={{ minHeight: '82vh' }}>
                            {messages.map((msg, index) => (
                                <div key={index} className={`d-flex my-2 justify-content-${msg.userId === userId ? 'start' : 'end'}`}>
                                    <div className={`bg-${msg.userId === userId ? 'warning' : 'dark'} text-light px-4 py-2 ${msg.userId === userId ? 'right' : 'left'}`}>
                                        <p className="mb-0">{msg.message}</p>
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
                            <button type="submit" className="btn btn-warning position-absolute top-50 end-0 translate-middle-y">
                                <SendIcon className="text-black" />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
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