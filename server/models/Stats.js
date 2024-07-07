const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
    player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    attack: {
        kills: { type: Number, default: 0 },
        errors: { type: Number, default: 0 },
        totalAttacks: { type: Number, default: 0 },
        hittingPercentage: { type: Number, default: 0 }
    },
    setting: {
        assists: { type: Number, default: 0 },
        ballHandlingErrors: { type: Number, default: 0 }
    },
    serving: {
        serviceAces: { type: Number, default: 0 },
        serveAttempts: { type: Number, default: 0 }
    },
    passing: {
        receptionErrors: { type: Number, default: 0 },
        receptionAttempts: { type: Number, default: 0 }
    },
    defense: {
        digs: { type: Number, default: 0 }
    },
    blocking: {
        blockSolos: { type: Number, default: 0 },
        blockAssists: { type: Number, default: 0 },
        blockingErrors: { type: Number, default: 0 }
    },
    misc: {
        points: { type: Number, default: 0 }
    }
});

const Stats = mongoose.model('Stats', statsSchema);
module.exports = Stats;