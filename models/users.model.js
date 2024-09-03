//packages
let mongoose = require("mongoose")

//local imports
let BeautyModel = require("../models/beauties.model.js")

//schema for storing users data
let userSchema = mongoose.Schema({
    userName: {
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    role:{
        type:String,
        default:"customer",
        required:true
    }
},{versionKey:false})

//Model creation
let UserModel = mongoose.model("User",userSchema)

//Exporting the model
module.exports = UserModel;