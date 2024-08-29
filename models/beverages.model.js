//packages
let mongoose = require('mongoose')

//local imports

//Schema creation
let beveragesSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    }
},{
    versionKey:false,
    timeStamps:true
})

//Model creation
let BeveragesModel = mongoose.model('beverage',beveragesSchema,'beverages');

//exporting Model
module.exports = BeveragesModel;