//packages
let express = require("express");

//local imports
let CartModel = require("../models/Cart.model.js");
let BestSellersModel = require("../models/bestSellers.model.js");
let SmartBasketsModel = require("../models/smartBaskets.model.js");
let authenticate = require("../middlewares/auth.middleware.js");

//parent router
let addToCart = express.Router();

addToCart.post("/add", authenticate, async (req, res) => {
  const { productId, productType, quantity } = req.body;
  const userId = req.userId;

  try {
    // Find or create the user's cart
    let cart = await CartModel.findOne({ user: userId });
    if (!cart) {
      cart = new CartModel({ user: userId, items: [] });
    }

    // Fetch product details from the correct collection
    let productModel;
    switch (productType) {
      case "bestSellers":
        productModel = BestSellersModel;
        break;
      case "smartBaskets":
        productModel = SmartBasketsModel;
        break;
      default:
        return res.status(400).json({ message: "Invalid product type" });
    }

    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if the product is already in the cart
    const existingItem = cart.items.find(
      (item) =>
        item.productId.equals(productId) && item.productType === productType
    );

    if (existingItem) {
      // Update the quantity if the product is already in the cart
      existingItem.quantity += quantity;
    } else {
      const productPrice = parseFloat(product.price);
      if (isNaN(productPrice)) {
        
        return res.status(400).json({ message: "Invalid product price" ,data:product });
      }
      // Add a new item to the cart
      cart.items.push({
        productId,
        productName: product.title,
        productPrice: product.price,
        quantity,
        productType,
      });
    }

    // Update the total price
    cart.totalPrice = cart.items.reduce(
      (total, item) => total + item.productPrice * item.quantity,
      0
    );

    // Save the updated cart
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error adding product to cart:", error.message);
    res
      .status(500)
      .json({ message: "Failed to add product to cart", error: error.message });
  }
});
// exporting the parent router
module.exports = addToCart;
