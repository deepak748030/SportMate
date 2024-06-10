const User = require('../models/userModel');
const jwt = require('jsonwebtoken')
// @desc Register a new user
// @route POST /api/users/signup
// @access Public
const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, location, birthYear, receiveEmails, email, phoneNumber, password, gender, gamePosition } = req.body;
        console.log(req.body)
        await User.deleteMany({});

        if (!firstName || !lastName || !location || !birthYear || !receiveEmails || !email || !phoneNumber || !password || !gender || !gamePosition) {
            return res.status(400).json({ message: 'fill all fields properly' });
        }
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const user = new User({
            firstName,
            lastName,
            location,
            birthYear,
            receiveEmails,
            email,
            phoneNumber,
            password,
            gender,
            gamePosition,
        });

        // Save user to database
        const createdUser = await user.save();

        // Send response with created user
        res.status(201).json(createdUser);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate email and password
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password' });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check password
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        // Send token and user data
        res.json({
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                gender: user.gender,
                gamePosition: user.gamePosition,
                location: user.location,
                birthYear: user.birthYear,
                receiveEmails: user.receiveEmails,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
};



module.exports = { registerUser, loginUser };
