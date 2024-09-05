//packages
let mongoose = require('mongoose')

//local imports

//Schema creation
let topOfferSchema = mongoose.Schema({
   image:{type:String,required:true}
},{
    versionKey:false,
    timeStamps:true
})

//Model creation
let TopOffersModel = mongoose.model('topOffer',topOfferSchema,'topOffers');

//exporting Model
module.exports = TopOffersModel;