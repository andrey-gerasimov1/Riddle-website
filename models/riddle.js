//SCHEMA RIDDLE CONVERSION PAGE

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const riddleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    cred: {
        type: String,
        required: true
    }
}, { timestamps: true});

const Riddle = mongoose.model('Riddles', riddleSchema);
module.exports = Riddle;
