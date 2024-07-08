const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// CRUD operations

router.get('/events/single/:id', eventController.getEventByUserId);
router.get('/events/:id', eventController.getEventById);
router.put('/events/:id', eventController.updateEvent);
router.delete('/events/:id', eventController.deleteEvent);
router.post('/create', eventController.createEvent);
router.get('/events', eventController.getEvents);
router.get('/approvedevents', eventController.getApprovedEvents);
router.put('/accept/:id', eventController.acceptEvent);

module.exports = router;
