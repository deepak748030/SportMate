import { io } from 'socket.io-client';

const developmentApi = 'http://localhost:3000';
const productionApi = 'https://sport-mate-server.vercel.app/'; // Assuming your production URL

const apiUrl = process.env.NODE_ENV === 'production' ? productionApi : developmentApi;

export const socket = io(apiUrl, {
    autoConnect: true,
    transports: ['websocket', 'polling'],
});

socket.on('connect', () => {
    console.log('Connected to Socket.IO server!');
});

socket.on('disconnect', (reason) => {
    console.log('Disconnected from Socket.IO server:', reason);
});

export const connectSocket = () => {
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
        console.warn('Attempted to send message while socket is disconnected.');
    }
};
