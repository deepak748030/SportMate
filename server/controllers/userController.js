const User = require('../models/userModel');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


const registerUser = async (req, res) => {
    try {
        const {
            role,
            firstName,
            lastName,
            location,
            birthYear,
            email,
            phoneNumber,
            password,
            gender,
            gamePosition
        } = req.body;


        // Check if all required fields are filled
        if (!role || !firstName || !lastName || !location || !birthYear || !email || !phoneNumber || !password || !gender) {
            return res.status(400).json({ message: 'Please fill all fields properly' });
        }

        // Additional check for gamePosition if the role is 'player'
        if (role === 'player' && !gamePosition) {
            return res.status(400).json({ message: 'Game position is required for players' });
        }

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = new User({
            role,
            firstName,
            lastName,
            location,
            birthYear,
            email,
            phoneNumber,
            password: hashedPassword,
            gender,
            gamePosition: role === 'player' ? gamePosition : undefined  // Set gamePosition only if role is 'player'
        });
        // console.log(user)
        // Save user to database
        const createdUser = await user.save();

        // Send response with created user
        res.status(201).json('user registered');
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
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        // Send token and user data
        res.json({
            token,
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                gender: user.gender,
                gamePosition: user.gamePosition,
                location: user.location,
                birthYear: user.birthYear,
                avatar: user.avatar,
                role: user.role,
                ranking: user.ranking

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

const deleteUser = async (req, res) => {
    const eventId = req.params.id;

    try {
        const deletedEvent = await User.findByIdAndDelete(eventId);

        if (!deletedEvent) {
            return res.status(404).json({ message: 'user not found' });
        }

        res.json({ message: 'user deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
};






// Update User Profile
const profileUser = async (req, res) => {
    try {
        const { userId, password, ...updateFields } = req.body;

        if (!userId) {
            console.log('User ID not found');
            return res.status(400).json({ message: 'User ID is required' });
        }

        const currentUser = await User.findById(userId);
        if (!currentUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if password is provided and hash it
        if (password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            updateFields.password = hashedPassword;
        }

        // Only update fields that are provided in the request body
        const updatedData = {};
        for (const [key, value] of Object.entries(updateFields)) {
            if (value !== undefined && value !== '') {
                updatedData[key] = value;
            }
        }

        // If a new avatar is uploaded, update the avatar field
        if (req.file) {
            updatedData.avatar = req.file.path;
        }

        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });

        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};



const getUserEvents = async (req, res) => {
    const { userId } = req.params;

    try {
        // Validate userId
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        // Find the user by ID and populate the joinedEvents field
        const user = await User.findById(userId).populate('joinedEvents');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Send the user and their joined events
        res.json(user.joinedEvents);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
};

module.exports = { registerUser, loginUser, profileUser, deleteUser, getAllUsers, getUserEvents };

