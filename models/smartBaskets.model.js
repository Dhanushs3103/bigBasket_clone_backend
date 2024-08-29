const mongoose = require('mongoose');

// Schema creation
const smartBasketSchema =  mongoose.Schema({
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
  priceByWeight: [
    {
      weight: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      MRP: {
        type: Number
      }
    }
  ]
}, {
  versionKey: false,
  timestamps: true
});

// Model creation
const SmartBasketsModel = mongoose.model('smartBasket', smartBasketSchema,'smartBaskets');

module.exports = SmartBasketsModel;
