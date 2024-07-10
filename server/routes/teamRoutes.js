const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const { joinEventWithTeam } = require('../controllers/eventTeamController');

// Route to create a new team
router.post('/create-team', teamController.createTeam);

// Route to get all teams
router.get('/teams', teamController.getTeams);

// Route to get a team by ID
router.get('/teams/:id', teamController.getTeamById);

// Route to update a team by ID
router.put('/teams/:id', teamController.updateTeamById);

// Route to delete a team by ID
router.delete('/teams/:id', teamController.deleteTeamById);


// Route to join an event with a team
router.post('/teamjoin/:eventId', joinEventWithTeam);



module.exports = router;
