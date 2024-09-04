//packages
let express = require("express");

//local imports
let CartModel = require("../models/Cart.model.js");
let authenticate = require("../middlewares/auth.middleware.js");

//parent router
let checkout = express.Router();

//Checkout Endpoint
checkout.post("/", authenticate, async (req, res) => {
    const userId = req.userId; // Assuming `authenticate` middleware sets the user ID
    try {
        let cart = await CartModel.findOne({ user: userId });
        
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }        
        // Empty the cart
        cart.items = [];
        cart.totalPrice = 0;
        // Save the updated cart
        await cart.save();

        res.status(200).json({ message: "Checkout successful,Your order will be delivered soon" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//exporting the parent router
module.exports = checkout;
