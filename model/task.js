const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    employeeEmail: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    assignDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending'
    }
});

module.exports = taskSchema;