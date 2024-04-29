const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    amount:{
        type: Number,
    },
    No_of_days:{
        type: Number,
    }
});

module.exports = mongoose.model('Package', packageSchema);
