import { io } from 'socket.io-client';

const developmentApi = 'http://localhost:3000';
const productionApi = 'https://sport-mate-server.vercel.app/'; // Assuming your production URL

// Use environment variables for a more secure and dynamic approach
const apiUrl = process.env.NODE_ENV === 'production' ? productionApi : developmentApi;

export const socket = io(apiUrl, {
    autoConnect: true,
    transports: ['websocket', 'polling'], // Prioritize WebSocket for real-time benefits
});

// Handle connection state changes for better user feedback
socket.on('connect', () => {
    console.log('Connected to Socket.IO server!');
});

socket.on('disconnect', (reason) => {
    console.log('Disconnected from Socket.IO server:', reason);
    // Optionally, attempt reconnection logic here
});

export const connectSocket = () => {
    // Not strictly necessary with autoConnect: true, but can be useful for manual control
    if (!socket.connected) {
        socket.connect();
    }
};

export const disconnectSocket = () => {
    if (socket.connected) {
        socket.disconnect();
    }
};

export const sendMessage = (message) => {
    if (socket.connected) {
        socket.emit('sendMessage', message);
    } else {
        console.warn('Attempted to send message while socket is disconnected. Consider reconnection logic or handling the message locally.');
    }
};
