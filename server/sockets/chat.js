const socketIo = require('socket.io');
const Message = require('./Message');

let io;

const initializeSocket = (server) => {
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    // Socket.IO logic
    io.on('connection', async (socket) => {
        // console.log('New client connected:', socket.id);

        // Fetch existing messages from the database and send to the new client
        const messages = await Message.find().sort({ createdAt: 1 });
        socket.emit('initialMessages', messages);

        // Listen for incoming messages
        socket.on('sendMessage', async (messageText) => {
            // console.log('Message received:', messageText);

            // Save message to the database
            const message = new Message({ text: messageText });
            await message.save();

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
