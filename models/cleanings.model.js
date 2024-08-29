//packages
let mongoose = require('mongoose')

//local imports

//Schema creation
let cleaningsSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    }
},{
    versionKey:false,
    timeStamps:true
})

//Model creation
let CleaningsModel = mongoose.model('cleaning',cleaningsSchema,'cleanings');

//exporting Model
module.exports = CleaningsModel;