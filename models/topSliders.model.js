//packages
let mongoose = require('mongoose')

//local imports

//Schema creation
let topSliderSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    }
},{
    versionKey:false,
    timeStamps:true
})

//Model creation
let TopSliderModel = mongoose.model('TopSlider',topSliderSchema,'TopSliders');

//exporting Model
module.exports = TopSliderModel;