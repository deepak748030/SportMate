const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    block: { type: Boolean, default: false },
    role: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    location: { type: String, required: true },
    birthYear: { type: Number },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    gamePosition: { type: String },
    avatar: { type: String },
    ranking: { type: String, default: 'Beginner' },
    joinedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
    teamsJoined: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
    resetPasswordToken: String,
    resetPasswordExpire: Date
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
