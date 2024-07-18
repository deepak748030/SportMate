const socketIo = require('socket.io');

let io;

const initializeSocket = (server) => {

    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });
    // Socket.IO logic
    io.on('connection', (socket) => {
        console.log('New client connected:', socket.id);

        // Listen for incoming messages
        socket.on('sendMessage', (messageText) => {
            // Broadcast the message to all clients
            io.emit('receiveMessage', { text: messageText, id: socket.id });
        });

        // Handle client disconnect
        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
    });
};

module.exports = { initializeSocket };
