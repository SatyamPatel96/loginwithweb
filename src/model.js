const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    fname: {
        type: String,
        required: true
    },
    lname: { type: String, required: true },
    title: { type: String, enum: ["Mr", "Mrs", "Miss"], required: true },

    email: {
        type: String,
        unique: 'this email already registerd',
        required: 'Email address is required'
          
    },
    password: {
        type: String,
        required: true
    }

}, { timestamps: true });


module.exports = mongoose.model('user', userSchema)