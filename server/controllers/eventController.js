const Event = require('../models/organizerModel');

const createEvent = async (req, res) => {
    const { user, eventName, place, date, price, numTeams, winningPrize, time } = req.body;
    console.log(`create`)
    try {

        console.log(req.body)
        if (!user || !eventName || !place || !date || !price || !numTeams || !winningPrize || !time) {
            return res.status(400).json({ message: 'fill all field properly' })
        }
        const event = new Event({
            user,
            eventName,
            place,
            date,
            time,
            price,
            numTeams,
            winningPrize,
        });

        await event.save();
        res.status(201).json({ message: 'created' });
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error)
    }
};


const getEvents = async (req, res) => {
    try {
        const events = await Event.find().populate('user', 'firstName lastName email'); // Populate user details
        // console.log(events)
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getEventById = async (req, res) => {
    const eventId = req.params.id;

    try {
        const event = await Event.findById(eventId).populate('user', 'firstName lastName email');

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateEvent = async (req, res) => {
    const eventId = req.params.id;
    console.log(eventId)

    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            eventId,
            { accepted: true },
            { new: true }
        );

        if (!updatedEvent) {
            console.log('event not found')
            return res.status(404).json({ message: 'Event not found' });
        }

        res.json(updatedEvent);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
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

module.exports = {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent,
};
