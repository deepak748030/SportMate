const express = require('express');
const dotenv = require('dotenv');
const http = require('http')
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const organizerRoutes = require('./routes/organizerRoutes')
const eventJoinRoutes = require('./routes/joineventRoutes')
const teamRoutes = require('./routes/teamRoutes')
const subscriptionRoutes = require('./routes/subscription');
const statsRoutes = require('./routes/statsRoutes');

const { initializeSocket } = require('./sockets/chat')
const connectDB = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
const server = http.createServer(app);




// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/uploads', express.static('uploads'));


//socketIo setup
initializeSocket(server)

// Routes
app.use('/api/v1', userRoutes);
app.use('/api/v1', organizerRoutes)
app.use('/api/v1', eventJoinRoutes)
app.use('/api/v1', teamRoutes)
app.use('/api/v1', subscriptionRoutes);
app.use('/api/v1', statsRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

