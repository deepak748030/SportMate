

const initializeSocket = (server) => {

    const io = require('socket.io')(server, {
        cors: {
            origin: "https://sport-mate.vercel.app",
            methods: ['GET', 'POST'],
        },
    });

    // io = socketIo(server, {
    //     cors: {
    //         origin: 'http://localhost:5173/chat' || '*',
    //         methods: ['GET', 'POST'],
    //     },
    // });
    // Socket.IO logic
    io.on('connection', (socket) => {
        console.log('New client connected:', socket.id);

        // Listen for incoming messages
        socket.on('sendMessage', (messageText) => {
            // Broadcast the message to all clients
            console.log(messageText)
            io.emit('receiveMessage', messageText);
        });

        // Handle client disconnect
        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
    });
};

module.exports = { initializeSocket };
