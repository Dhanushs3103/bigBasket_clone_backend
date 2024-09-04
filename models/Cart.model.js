//packages
let mongoose = require("mongoose");

//CartItem Schema creation
let cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, required: true },
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
  quantity: { type: Number, default: 1 },
  productType: { type: String, required: true },
});

//Cart schema creation

let CartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [cartItemSchema],
  totalPrice: { type: Number, default: 0 },
});

// Cart model creation
let CartModel = mongoose.model('Cart', CartSchema);

//exporting the model
module.exports = CartModel