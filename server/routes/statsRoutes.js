// routes/stats.js
const express = require('express');
const router = express.Router();
const Stats = require('../models/Stats');
const Player = require('../models/Player');

// Route to record stats for a player
router.post('/record', async (req, res) => {
    try {
        const { playerId, eventId, stats } = req.body;

        const newStats = new Stats({
            player: playerId,
            event: eventId,
            ...stats
        });

        await newStats.save();

        res.status(200).json({ message: 'Stats recorded successfully', newStats });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to get stats for a player in an event
router.get('/:playerId/:eventId', async (req, res) => {
    try {
        const { playerId, eventId } = req.params;
        const stats = await Stats.findOne({ player: playerId, event: eventId });

        if (!stats) {
            return res.status(404).json({ message: 'No stats found for this player and event' });
        }

        res.status(200).json(stats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
