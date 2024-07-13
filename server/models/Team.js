const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    teamName: {
        type: String,
        required: true
    },
    clubName: {
        type: String
    },
    sport: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    ageGroup: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    timezone: {
        type: String,
        required: true
    },
    hearAbout: {
        type: String
    },
    seeContactInfo: {
        type: Boolean,
        default: false
    },
    uploadPhotosDocs: {
        type: Boolean,
        default: false
    },
    friends: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);
