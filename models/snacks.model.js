//packages
let mongoose = require('mongoose')

//local imports

//Schema creation
let snackSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    }
},{
    versionKey:false,
    timeStamps:true
})

//Model creation
let SnacksModel = mongoose.model('snack',snackSchema,'snacks');

//exporting Model
module.exports = SnacksModel;