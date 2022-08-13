/* eslint-disable linebreak-style */
/* eslint-disable indent */

const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
}, {versionKey: false});

module.exports = model('Users', UserSchema);
