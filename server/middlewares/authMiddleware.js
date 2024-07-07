const JWT = require('jsonwebtoken');
const userModel = require('../models/userModel');

const requireSignIn = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized: Token not provided',
            });
        }

        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        console.error(error);
        return res.status(401).json({
            success: false,
            message: 'Unauthorized: Invalid token',
        });
    }
};

const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user.userId);
        if (!user) {
            return res.json({
                success: false,
                message: 'Unauthorized: User not found',
            });
        }

        if (user.role == 'admin') {
            next();
        } else {
            return res.json({
                success: false,
                message: 'Forbidden: Insufficient permissions',
            });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};

module.exports = { isAdmin, requireSignIn };