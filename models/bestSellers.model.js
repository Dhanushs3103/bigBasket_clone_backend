const mongoose = require('mongoose');

// Schema creation
const bestSellerSchema =  mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  price:{type:Number,required:true}
}, {
  versionKey: false,
  timestamps: true
});

// Model creation
const BestSellersModel = mongoose.model('bestSeller', bestSellerSchema,'bestSellers');

module.exports = BestSellersModel;
