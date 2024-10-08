//packages
let jwt = require("jsonwebtoken");

//local imports
let UserModel = require("../models/users.model.js");
let JWT_SECRET_KEY_1 = process.env.JWT_SECRET_KEY_1
let BlackListedTokenModel = require("../models/blacklistedToken.model.js")

//middleware to check if the user is authenticated or not
async function authenticate(req, res, next) {
  try {
    let token = req.headers.authorization.split(" ")[1];
    //if token not found
    if (!token) {
      return res.status(404).json({ message: "Token not found" });
    }
    //checking if token exits in BlackListedTokenModal
    let tokenInDb = await BlackListedTokenModel.findOne({token});
    //if token found in DB -
    if(tokenInDb){
      return res.status(401).json({message:"User was logged out, please login"})
    }
    //if token exits
    jwt.verify(token, JWT_SECRET_KEY_1, function (err, decoded) {
      if(err) {
        return res.status(401).json({message:"User not authenticated, please login"})
      }
      if(decoded){
        req.userId = decoded.userId;
        next()
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
}

//exporting the middleware
module.exports = authenticate;