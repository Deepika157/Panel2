const mongoose = require('mongoose');
const Package = require('../models/package');

const paymentSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    packageID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
        required: true,
    },
    packageDetails:{
        type: [String], 
        default: [],
    }
});

module.exports = mongoose.model('Payment', paymentSchema);
