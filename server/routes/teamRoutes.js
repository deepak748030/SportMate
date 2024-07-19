const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

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

// Route to add friends to a team by ID
router.post('/teams/:id/add-friends', teamController.addFriendsToTeam);

// Route to get friends by team ID
router.get('/teams/:id/get-friends', teamController.getFriendsById);

// Route to join an event with a team
router.post('/teamjoin/:eventId', teamController.joinEventWithTeam);

// Route to remove a friend from a team by team ID and user ID
router.delete('/teams/:teamId/remove-friend/:userId', teamController.removeFriendFromTeam);

router.get('/teams/:teamId/generate-join-link', teamController.generateJoinLink);

module.exports = router;
