//packages
let {Schema,model} = require("mongoose")

//local imports

//schema for storing users data
let userSchema = Schema({
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
})

//Model creation

//Exporting the model