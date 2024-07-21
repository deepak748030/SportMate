const initializeSocket = (server) => {
    const io = require('socket.io')(server, {
        cors: {
            origin: "*",
            methods: ['GET', 'POST'],
        },
    });
    const mongoose = require('mongoose');
    const Message = require('../models/Message'); // Adjust the path as needed

    const userSockets = {};

    io.on('connection', (socket) => {
        console.log('New client connected:', socket.id);

        // Register user on connect
        socket.on('register', (userId) => {
            userSockets[userId] = socket.id;
            console.log(`User ${userId} registered with socket id ${socket.id}`);
        });

        // Handle sending messages
        socket.on('sendMessage', async ({ senderId, receiverId, messageText }) => {
            const messageData = {
                senderId,
                receiverId,
                messageText,
                timestamp: new Date().toISOString(),
            };

            // Save message to database
            await Message.create(messageData);

            // Emit to receiver if they are connected
            const receiverSocketId = userSockets[receiverId];
            if (receiverSocketId) {
                io.to(receiverSocketId).emit('receiveMessage', messageData);
            }
        });

        // Load previous messages for a user
        socket.on('loadMessages', async ({ userId, chatPartnerId }) => {
            const messages = await Message.find({
                $or: [
                    { senderId: userId, receiverId: chatPartnerId },
                    { senderId: chatPartnerId, receiverId: userId }
                ]
            }).sort({ timestamp: 1 }); // Sort by timestamp

            socket.emit('loadMessages', messages);
        });



        // Handle client disconnect
        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
            for (const userId in userSockets) {
                if (userSockets[userId] === socket.id) {
                    delete userSockets[userId];
                    break;
                }
            }
        });
    });
};

module.exports = { initializeSocket };
