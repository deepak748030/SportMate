const socketIo = require('socket.io');
const Message = require('./Message'); // Assuming Message model exists

let io;

const initializeSocket = (server) => {
    io = socketIo(server, {
        cors: {
            origin: '*', // Consider restricting origins for security in production
            methods: ['GET', 'POST'],
        },
    });

    // Socket.IO logic
    io.on('connection', async (socket) => {
        console.log('New client connected:', socket.id);

        // Fetch existing messages from the database and send to the new client
        try {
            const messages = await Message.find().sort({ createdAt: 1 });
            socket.emit('initialMessages', messages);
        } catch (error) {
            console.error('Error fetching messages:', error);
            // Handle error gracefully, e.g., send an error message to the client
        }

        // Listen for incoming messages
        socket.on('sendMessage', async (messageText) => {
            try {
                // Save message to the database
                const message = new Message({ text: messageText });
                await message.save();

                // Broadcast the message to all clients
                io.emit('receiveMessage', message);
            } catch (error) {
                console.error('Error saving or broadcasting message:', error);
                // Handle error gracefully, e.g., notify the user or retry
            }
        });

        // Handle client disconnect
        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
    });
};

module.exports = { initializeSocket };
