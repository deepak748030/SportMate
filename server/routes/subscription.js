const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');
const User = require('../models/userModel');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


// Endpoint to create a subscription
router.post('/subscribe', async (req, res) => {
    try {
        const { userId, plan } = req.body;

        // Determine end date based on plan
        let endDate = new Date();
        if (plan === 'monthly') {
            endDate.setMonth(endDate.getMonth() + 1);
        } else if (plan === 'yearly') {
            endDate.setFullYear(endDate.getFullYear() + 1);
        }

        const subscription = new Subscription({
            userId,
            plan,
            endDate,
        });

        await subscription.save();

        res.status(200).json({ message: 'Subscription created successfully', subscription });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to get subscription status
router.get('/subscription/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const subscription = await Subscription.findOne({ userId }).sort({ endDate: -1 });

        if (!subscription) {
            return res.status(200).json({ message: 'No subscription found for this user' });
        }

        const isActive = new Date(subscription.endDate) > new Date();
        res.status(200).json({ active: isActive });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
