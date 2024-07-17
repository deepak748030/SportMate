const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
    registerUser,
    loginUser,
    profileUser,
    deleteUser,
    getAllUsers,
    getUserEvents,
    toggleBlockUser,
    forgotPassword,
    resetPassword
} = require('../controllers/userController');
const { requireSignIn, isAdmin } = require('../middlewares/authMiddleware');

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

router.get('/users', getAllUsers);
router.get('/user/:userId', getUserEvents);
router.delete('/userdelete/:id', deleteUser);
router.post('/signup', registerUser);
router.post('/login', loginUser);
router.put('/profile', requireSignIn, upload.single('avatar'), profileUser);

// Protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});
// Protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

// Route to toggle block status of a user
router.patch('/toggle-block/:userId', toggleBlockUser);

// New routes for forgot and reset password
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;
