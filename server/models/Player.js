// models/Player.js
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;

