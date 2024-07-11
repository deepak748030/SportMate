const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: { type: String, required: true },  // Added role field
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    location: { type: String, required: true },
    birthYear: { type: Number },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    gamePosition: { type: String },  // gamePosition is optional
    avatar: { type: String },
    ranking: { type: String, default: 'Beginner' },
    joinedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
    teamsJoined: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }]
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
