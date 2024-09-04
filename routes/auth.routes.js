//packages
let express = require("express");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");

//local imports
let JWT_SECRET_KEY_1 = process.env.JWT_SECRET_KEY_1;
let JWT_SECRET_KEY_2 = process.env.JWT_SECRET_KEY_2;
let SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10);
let UserModel = require("../models/users.model.js");
let BlackListedTokenModel = require("../models/blacklistedToken.model.js")
let authenticate = require("../middlewares/auth.middleware.js")

//parent Router
let authRouter = express.Router();

//function to generate access token
async function generateAccessToken(payload,duration){
  try {
    //generating the token
    let token = jwt.sign(payload,JWT_SECRET_KEY_1,duration)
    //return the token 
    return token
  } catch (error) {
    console.log(error)
    return null
  }
}

//Endpoint to register the user
authRouter.post("/register", async (req, res) => {
    try {
      // destructuring the req.body
      let { userName, age, email, password, role } = req.body;
      // finding if the user already registered or not
      const user = await UserModel.find({ userName });
      //if present - sending res as user already registered please login
      if (user.length > 0) {
        return res.status(307).json({ message: "user already exits" });
      }
      //Hashing the password before storing in the DB
      bcrypt.hash(password, SALT_ROUNDS, async (err, hash) => {
        try {
          if (err) {
            res.status(500).json({ message: err });
          }
          // If not present - Registering the new user
          const newUser = await new UserModel({
            userName,
            password: hash,
            age,
            email
          });
          //saving the user to DB
          await newUser.save();
          //sending the response as user registered successfully
          res.status(201).json({ message: "User Registered Successfully" });
        } catch (error) {
          console.log(error);
          res.status(500).send(error);
        }
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  });

//Endpoint for Login the user
authRouter.post("/login",async(req,res)=>{
  try {
    //destructuring
    let {email, password} = req.body;
    //finding if the user with this email exits
    let user = await UserModel.findOne({email})
    // if not found -
    if(!user) {
      return res.status(401).json({message:"User not found"})
    }
    //if found -
    bcrypt.compare(password,user.password,async(err,result)=>{
      if(err) {
        return res.status(500).json({message:err})
      }
      //if result is true
      if(result){
        // generating the tokens
        let accessToken = await generateAccessToken({userId:user._id},{expiresIn:"12h"});
        //setting the tokens to the response headers
        res.header({
          "Authorization": `Bearer ${accessToken}`
        });
        //sending login success response
        res.status(200).json({message:"Login successful"})
      }else{
        return res.status(403).json({message:"Wrong Credentials"})
      }
    })
  } catch (error) {
    res.status(500).json({message:error})
  }
})

//Endpoint to logout the user
authRouter.post("/logout",authenticate,async(req,res)=>{
  try {
    //destructuring the token
    let {token} = req.body;
    if(!token) return res.status(404).json({message:"Please provide token"})
    //checking if token exits in DB
    let tokenInDb = await BlackListedTokenModel.findOne({token});
    //if token exits
    if(tokenInDb) {
      return res.status(409).json({message:"Token already exits, please login"})
    } 
    // adding data to DB
    let newToken = await new BlackListedTokenModel({token});
    //saving to database
    await newToken.save();
    //sending response
    res.status(200).json({message:"Logout successful"})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

//exporting authRouter
module.exports = authRouter