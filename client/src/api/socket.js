import { io } from 'socket.io-client';

const api = "https://sport-mate-server.vercel.app/"; // Adjust based on your server configuration
export const socket = io(api, {
    autoConnect: false
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
    }
};

export default socket;
