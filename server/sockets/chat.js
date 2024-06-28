const socketIo = require('socket.io');

let io;

const initializeSocket = (server) => {
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    // Store messages in memory
    let messages = [];


    // Socket.IO logic
    io.on('connection', (socket) => {
        console.log('New client connected:', socket.id);

        // Send existing messages to the new client
        socket.emit('initialMessages', messages);

        // Listen for incoming messages
        socket.on('sendMessage', (message) => {
            console.log('Message received:', message);
            // Store message in memory
            messages.push(message);
            // Broadcast the message to all clients
            io.emit('receiveMessage', message);
        });

        // Handle client disconnect
        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
    });





};

module.exports = { initializeSocket };
