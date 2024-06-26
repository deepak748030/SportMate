const express = require('express');
const { joinEvent, getAllJoinEvents, deleteJoinedEvent } = require('../controllers/eventjoinedController');
const router = express.Router();

// CRUD operations
router.post('/users/:userId/join/:eventId', joinEvent);
router.get('/users/:userId/joined-events', getAllJoinEvents);
router.delete('/users/:userId/leave/:eventId', deleteJoinedEvent)

module.exports = router;
