const mongoose = require('mongoose')
const {Schema} = mongoose


const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Enrollment: {
        type: String,
        unique: true,
        required: true
    },
    Email:{
        type:String,
        required: true,
        unique: true,
    },
    Gender: {
        type: String,
        enum: ['Male', 'Female','Other']
    },
    Mobile:{
        type: Number,
        required:true,
        minlength:10
    },
    Password: {
        type: String,
        required: true,
        minlength:8,
    },
    Profile_Image:{
        type : String
    }
})

module.exports = mongoose.model('user', userSchema)