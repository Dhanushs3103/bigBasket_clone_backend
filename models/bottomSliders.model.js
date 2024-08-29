//packages
let mongoose = require('mongoose')

//local imports

//Schema creation
let bottomSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    }
},{
    versionKey:false,
    timeStamps:true
})

//Model creation
let BottomSlidersModel = mongoose.model('bottomSlider',bottomSchema,'bottomSliders');

//exporting Model
module.exports = BottomSlidersModel;