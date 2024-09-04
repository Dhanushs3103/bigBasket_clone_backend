//packages
let mongoose = require("mongoose");

//schema creation
let blackListedTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true
    }
},{
    versionKey:false,
    timestamps:true
})

//modal creation
let BlackListedTokenModel = mongoose.model("BlackListedToken",blackListedTokenSchema);

//exporting the modal
module.exports = BlackListedTokenModel;