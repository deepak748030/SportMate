const Team = require('../models/Team');

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
            uploadPhotosDocs
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
            uploadPhotosDocs
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



