const socketIo = require('socket.io');

let io;

const initializeSocket = (server) => {

    io = socketIo(server, {
        cors: {
            origin: 'http://localhost:5173/chat',
            methods: ['GET', 'POST'],
        },
    });
    // Socket.IO logic
    io.on('connection', (socket) => {
        console.log('New client connected:', socket.id);

        // Listen for incoming messages
        socket.on('sendMessage', (messageText) => {
            // Broadcast the message to all clients
            io.emit('receiveMessage', messageText);
        });

        // Handle client disconnect
        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
    });
};

module.exports = { initializeSocket };
