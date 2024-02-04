const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    }
})
const Feedback = mongoose.model('FEEDBACK',feedbackSchema);
module.exports=Feedback;