const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');
const getStripe = (req) => {
    return req.app.get('stripe'); // Retrieve the Stripe instance from the app
};

// Endpoint to subscribe
router.post('/subscribe', async (req, res) => {
    try {
        const { userId, plan, cardDetails } = req.body; // Include cardDetails in the request
        const stripe = getStripe(req); // Get Stripe instance

        const subs = await Subscription.findOne({ userId: userId });

        let endDate;
        if (subs && subs.endDate) {
            endDate = subs.endDate;
        } else {
            endDate = new Date();
        }

        let amount;
        if (plan === 'monthly') {
            amount = 10; // in USD
            endDate.setMonth(endDate.getMonth() + 1);
        } else if (plan === 'yearly') {
            amount = 100; // in USD
            endDate.setFullYear(endDate.getFullYear() + 1);
        }

        // Simulate accepting any card details
        if (cardDetails.cardNumber && cardDetails.expiryDate && cardDetails.cvv) {
            console.log('Card Details (For Testing):', cardDetails);
        } else {
            return res.status(400).json({ error: 'Invalid card details provided' });
        }

        // Create a mock subscription (for testing, bypass actual Stripe call)
        const subscription = {
            id: 'mock_subscription_id',
            status: 'active',
            plan,
            userId,
            start_date: new Date(),
            end_date: endDate,
        };

        const newSubscription = new Subscription({
            userId,
            plan,
            endDate,
        });

        await newSubscription.save();

        res.status(200).json({ message: 'Subscription created successfully', subscription: newSubscription });
    } catch (error) {
        console.error(error);
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
