const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const userSchema = new mongoose.Schema({

    // userId: {
    //     type: ObjectId,
    //     ref: "users",
    //     required: true
    // },
    
    age: {
        type: Number,
        required: true
    },
    phonenumber: { type: Number, required: true,unique:true }

}, { timestamps: true });



module.exports = mongoose.model('loginform', userSchema)