const Event = require('../models/organizerModel');

const createEvent = async (req, res) => {
    const { user, eventName, startDate, dayOfWeek, gamesTime, length, teamFee, location, winningPrize } = req.body;

    try {
        if (!user || !eventName || !startDate || !dayOfWeek || !gamesTime || !length || !teamFee || !location || !winningPrize) {
            return res.status(400).json({ message: 'Fill all fields properly' });
        }

        const event = new Event({
            user,
            eventName,
            startDate,
            dayOfWeek,
            gamesTime,
            length,
            teamFee: parseFloat(teamFee),
            location,
            winningPrize: parseFloat(winningPrize) // Include winningPrize
        });

        await event.save();
        res.status(201).json({ message: 'Event created' });
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(400).json({ message: error.message });
    }
};




const getEventById = async (req, res) => {
    const userId = req.params.id;

    try {
        const events = await Event.find({ user: userId }).populate('user', 'firstName lastName email');

        // console.log(events)
        if (!events || events.length === 0) {
            return res.status(404).json({ message: 'No events found for this user' });
        }

        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getEventByUserId = async (req, res) => {
    const userId = req.params.id;

    try {
        const events = await Event.findById(userId)
            .populate('participants', 'firstName lastName email phoneNumber')
            .populate('joinedteams');

        if (!events || events.length === 0) {
            return res.status(404).json({ message: 'No events found for this user' });
        }
        // console.log(events.joinedteams)
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const getEvents = async (req, res) => {
    try {
        const events = await Event.find({}).populate('user', 'firstName lastName email'); // Populate user details
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getApprovedEvents = async (req, res) => {
    try {
        const events = await Event.find({ accepted: true }).populate('user', 'firstName lastName email'); // Populate user details
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const declineEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const updatedEvent = await Event.findByIdAndUpdate(
            eventId,
            { accepted: false },
            { new: true } // To return the updated document
        );

        res.json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateEvent = async (req, res) => {
    const eventId = req.params.id;
    const { eventName, startDate, dayOfWeek, gamesTime, length, teamFee, location, winningPrize } = req.body;

    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            eventId,
            { eventName, startDate, dayOfWeek, gamesTime, length, teamFee: parseFloat(teamFee), location, winningPrize: parseFloat(winningPrize) },
            { new: true }
        );

        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.json(updatedEvent);
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ message: 'Failed to update event' });
    }
};




const deleteEvent = async (req, res) => {
    const eventId = req.params.id;

    try {
        const deletedEvent = await Event.findByIdAndDelete(eventId);

        if (!deletedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const acceptEvent = async (req, res) => {
    const eventId = req.params.id;

    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            eventId,
            { accepted: true },
            { new: true } // To return the updated document
        );

        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.json({ message: 'Event accepted successfully', event: updatedEvent });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent,
    getApprovedEvents,
    acceptEvent,
    getEventByUserId,
    declineEvent
};
