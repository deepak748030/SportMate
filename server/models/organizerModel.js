const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    eventName: { type: String, required: true },
    startDate: { type: String, required: true },
    dayOfWeek: { type: String, required: true },
    gamesTime: { type: String, required: true },
    length: { type: String, required: true },
    teamFee: { type: Number, required: true },
    location: { type: String, required: true },
    winningPrize: { type: Number, required: true },
    accepted: {
        type: Boolean,
        default: false
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    joinedteams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }]
}, {
    timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
