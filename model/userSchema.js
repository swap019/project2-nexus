const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    }
})

const User = mongoose.model('USERDATA',userSchema)
module.exports=User;