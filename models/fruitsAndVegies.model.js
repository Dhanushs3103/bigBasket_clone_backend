//packages
let mongoose = require('mongoose')

//local imports

//Schema creation
let fruitsAndVegiesSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    }
},{
    versionKey:false,
    timeStamps:true
})

//Model creation
let FruitsAndVegiesModel = mongoose.model('fruitsAndVegie',fruitsAndVegiesSchema,'fruitsAndVegies');

//exporting Model
module.exports = FruitsAndVegiesModel;