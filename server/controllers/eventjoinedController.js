const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const Event = require('../models/organizerModel');

// Join an event
const joinEvent = async (req, res) => {
    const { userId, eventId } = req.params;
    console.log(req.params);

    try {
        const user = await User.findById(userId);
        const event = await Event.findById(eventId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Initialize joinedEvents and participants arrays if they are undefined
        if (!user.joinedEvents) {
            user.joinedEvents = [];
        }

        if (!event.participants) {
            event.participants = [];
        }

        if (user.joinedEvents.includes(eventId) || event.participants.includes(userId)) {
            return res.status(400).json({ message: 'User already joined this event' });
        }

        user.joinedEvents.push(eventId);
        await user.save();

        event.participants.push(userId);
        await event.save();

        res.status(200).json({ message: 'Event joined successfully', joinedEvents: user.joinedEvents, participants: event.participants });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
};



const getAllJoinEvents = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId).populate('joinedEvents');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user.joinedEvents);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
};



const deleteJoinedEvent = async (req, res) => {
    const { userId, eventId } = req.params;

    try {
        const user = await User.findById(userId);
        const event = await Event.findById(eventId);

        if (!user || !event) {
            return res.status(404).json({ message: 'User or Event not found' });
        }

        if (!user.joinedEvents.includes(eventId)) {
            return res.status(400).json({ message: 'User has not joined this event' });
        }

        user.joinedEvents = user.joinedEvents.filter(id => id.toString() !== eventId);
        await user.save();

        res.status(200).json({ message: 'Event left successfully', joinedEvents: user.joinedEvents });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
};

module.exports = { joinEvent, getAllJoinEvents, deleteJoinedEvent };
