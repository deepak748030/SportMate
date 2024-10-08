const Team = require('../models/Team');
const Event = require('../models/organizerModel')
const User = require('../models/userModel')

// Create new team
exports.createTeam = async (req, res) => {
    try {
        const {
            user,
            teamName,
            clubName,
            sport,
            gender,
            ageGroup,
            address,
            state,
            city,
            timezone,
            hearAbout,
            seeContactInfo,
            uploadPhotosDocs,
            friends
        } = req.body;

        const newTeam = new Team({
            user,
            teamName,
            clubName,
            sport,
            gender,
            ageGroup,
            address,
            state,
            city,
            timezone,
            hearAbout,
            seeContactInfo,
            uploadPhotosDocs,
            friends
        });

        const savedTeam = await newTeam.save();
        res.status(201).json(savedTeam);
    } catch (err) {
        console.error('Error creating team:', err);
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: err.message });
        }
        res.status(500).json({ error: 'Server error' });
    }
};


// Function to add a team to the joinedteams array
exports.joinEventWithTeam = async (req, res) => {
    // console.log('join run');
    const { teamId, userId } = req.body; // Assuming teamId and userId are sent in the request body
    const { eventId } = req.params; // Assuming eventId is sent as a URL parameter

    try {
        // Find the event by ID
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Find the user by ID
        const user = await User.findById(userId);
        // console.log('user:', user)
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the team is already in the event's joinedteams array
        if (event.joinedteams.includes(teamId)) {
            return res.status(400).json({ message: 'Team already joined this event' });
        }

        // Check if the event is already in the user's teamsJoined array
        // if (user.teamsJoined.includes(eventId)) {
        //     return res.status(400).json({ message: 'Team already joined this user' });
        // }

        // Add the team ID to the event's joinedteams array
        event.joinedteams.push(teamId);

        // Add the event ID to the user's teamsJoined array
        user.teamsJoined.push(eventId);

        // Save the event and the user
        await event.save();
        await user.save();

        res.status(200).json({ message: 'Team joined event successfully' });
    } catch (error) {
        console.error('Error joining event with team:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Get all teams
exports.getTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (err) {
        console.error('Error fetching teams:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get team by ID
exports.getTeamById = async (req, res) => {
    const { id } = req.params;
    try {
        const team = await Team.find({ user: id });
        if (!team) {
            return res.status(404).json({ error: 'Team not found' });
        }
        res.json(team);
    } catch (err) {
        console.error('Error fetching team by ID:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Update team by ID
exports.updateTeamById = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTeam = await Team.findByIdAndUpdate(id, req.body, {
            new: true, // Return the updated document
            runValidators: true, // Run Mongoose validators
        });
        if (!updatedTeam) {
            return res.status(404).json({ error: 'Team not found' });
        }
        res.json(updatedTeam);
    } catch (err) {
        console.error('Error updating team:', err);
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: err.message });
        }
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete team by ID
exports.deleteTeamById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTeam = await Team.findByIdAndDelete(id);
        if (!deletedTeam) {
            return res.status(404).json({ error: 'Team not found' });
        }
        res.json({ message: 'Team deleted successfully' });
    } catch (err) {
        console.error('Error deleting team:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Add friends to team by ID
exports.addFriendsToTeam = async (req, res) => {
    try {
        const teamId = req.params.id;
        let { friends } = req.body;

        console.log('Request body:', req.body); // Debugging statement
        console.log('Friends:', friends); // Debugging statement

        // Check if friends is a string and convert it to an array
        if (typeof friends === 'string') {
            friends = [friends];
        }

        // Check if friends is an array
        if (!Array.isArray(friends)) {
            return res.status(400).json({ message: 'Friends should be an array or a single friend ID' });
        }

        const team = await Team.findById(teamId);
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }

        // Filter out friends who are already joined
        const newFriends = friends.filter(friendId => !team.friends.includes(friendId));

        // Add new friends to the team
        team.friends = team.friends.concat(newFriends);
        await team.save();

        res.status(200).json(team);
    } catch (error) {
        console.error('Error adding friends to team:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


// Get friends by team ID
exports.getFriendsById = async (req, res) => {
    const { id } = req.params;
    try {
        const team = await Team.findById(id).populate('friends', 'firstName lastName');
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }

        // Extract only unique friends (in case there are duplicates)
        const uniqueFriends = Array.from(new Set(team.friends.map(friend => friend._id.toString())));

        res.json(uniqueFriends.map(friendId => ({
            _id: friendId,
            firstName: team.friends.find(friend => friend._id.toString() === friendId).firstName,
            lastName: team.friends.find(friend => friend._id.toString() === friendId).lastName
        })));
    } catch (error) {
        console.error('Error fetching friends by team ID:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Remove friend from team by team ID and user ID
exports.removeFriendFromTeam = async (req, res) => {
    const { teamId, userId } = req.params;

    try {
        // Find the team by teamId
        const team = await Team.findById(teamId);
        if (!team) {
            return res.status(404).json({ error: 'Team not found' });
        }

        // Remove the user from the team's friends list
        const updatedTeam = await Team.findByIdAndUpdate(
            teamId,
            { $pull: { friends: userId } },
            { new: true }
        );

        res.json(updatedTeam);
    } catch (error) {
        console.error('Error removing friend:', error);
        res.status(500).json({ error: 'Server error' });
    }
};


exports.generateJoinLink = async (req, res) => {
    const { teamId } = req.params;
    const joinLink = `http://localhost:5173/join-team/${teamId}`;
    res.json({ joinLink });
};