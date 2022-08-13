/* eslint-disable linebreak-style */
/* eslint-disable indent */
const {Schema, model} = require('mongoose');

const NotesSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: false,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    text: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
}, {versionKey: false});

module.exports = model('Notes', NotesSchema);
