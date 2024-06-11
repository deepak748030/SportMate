const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose'); // Import mongoose
const { registerUser, loginUser, profileUser } = require('../controllers/userController');
const router = express.Router();

// Setup multer for avatar upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.put('/profile', upload.single('avatar'), profileUser);

module.exports = router;
