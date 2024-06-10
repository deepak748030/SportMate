const User = require('../models/userModel');

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


module.exports = { registerUser };
