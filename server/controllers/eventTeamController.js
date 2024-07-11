const Event = require('../models/organizerModel'); // Adjust the path to where your Event model is located

// Function to add a team to the joinedteams array
const joinEventWithTeam = async (req, res) => {
    const { teamId } = req.body; // Assuming teamId is sent in the request body
    const { eventId } = req.params; // Assuming eventId is sent as a URL parameter

    try {
        // Find the event by ID
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Check if the team is already in the joinedteams array
        if (event.joinedteams.includes(teamId)) {
            return res.status(400).json({ message: 'Team already joined this event' });
        }

        // Add the team ID to the joinedteams array
        event.joinedteams.push(teamId);

        // Save the event
        await event.save();

        res.status(200).json({ message: 'Team joined event successfully' });
    } catch (error) {
        console.error('Error joining event with team:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    joinEventWithTeam,
};
