import React, { useState, useEffect } from 'react';
import Layout from '../../components/layouts/Layout';
import { connectSocket, disconnectSocket, sendMessage, socket } from '../../api/socket'; // Adjust import path as needed
import './chat.css';

export default function SingleChat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        connectSocket();

        // Clean up on unmount
        return () => {
            disconnectSocket();
        };
    }, []);

    // Handle sending messages
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            sendMessage(message);
            setMessage('');
        }
    };

    // Listen for received messages
    useEffect(() => {
        const receiveMessage = (newMessage) => {
            setMessages(prevMessages => [...prevMessages, newMessage]);
        };

        // Subscribe to 'receiveMessage' event
        socket.on('receiveMessage', receiveMessage);

        // Initial messages received
        socket.on('initialMessages', (initialMessages) => {
            setMessages(initialMessages);
        });

        // Clean up event listeners on unmount
        return () => {
            socket.off('receiveMessage', receiveMessage);
            socket.off('initialMessages');
        };
    }, []); // Ensure the dependency array is empty to run only once

    return (
        <Layout>
            <div className="container-fluid d-flex flex-column my-1 bg-white border rounded" style={{
                maxWidth: '40rem',
                maxHeight: '90vh'
            }}>
                <div className="flex-1 overflow-auto py-1">
                    <div className="flex flex-column gap-4" style={{
                        minHeight: '82vh'
                    }}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`d-flex my-2 justify-content-${index % 2 === 0 ? 'end' : 'start'}`}>
                                <div className={`bg-${index % 2 === 0 ? 'warning' : 'dark'} text-light px-4 py-2 ${index % 2 === 0 ? 'left' : 'right'}`}>
                                    <p className="mb-0">{msg.text}</p>
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
                        <button type="submit" onClick={handleSendMessage} className="btn btn-warning position-absolute top-50 end-0 translate-middle-y">
                            <SendIcon className="text-black" />
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

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
