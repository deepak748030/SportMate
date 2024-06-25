const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    eventName: { type: String, required: true },
    place: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },  // Add time field
    price: { type: Number, required: true }, // Change to Number
    numTeams: { type: Number, required: true }, // Change to Number
    winningPrize: { type: Number, required: true }, // Change to Number
    accepted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
