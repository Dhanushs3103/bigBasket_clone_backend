//packages
let mongoose = require('mongoose')

//local imports

//Schema creation
let dailyStapleSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    }
},{
    versionKey:false,
    timeStamps:true
})

//Model creation
let DailyStapleModal = mongoose.model('dailyStaple',dailyStapleSchema,'dailyStaples');

//exporting Model
module.exports = DailyStapleModal;