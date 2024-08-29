//packages
let mongoose = require('mongoose')

//local imports

//Schema creation
let beautySchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    }
},{
    versionKey:false,
    timeStamps:true
})

//Model creation
let BeautyModel = mongoose.model('beautie',beautySchema,'beauties');

//exporting Model
module.exports = BeautyModel;