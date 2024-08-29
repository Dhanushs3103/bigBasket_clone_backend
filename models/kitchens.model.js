//packages
let mongoose = require('mongoose')

//local imports

//Schema creation
let kitchensSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    }
},{
    versionKey:false,
    timeStamps:true
})

//Model creation
let KitchensModel = mongoose.model('kitchen',kitchensSchema,'kitchens');

//exporting Model
module.exports = KitchensModel;