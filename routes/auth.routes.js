//packages
let express = require("express");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");

//local imports
let JWT_SECRET_KEY_1 = process.env.JWT_SECRET_KEY_1;
let JWT_SECRET_KEY_2 = process.env.JWT_SECRET_KEY_2;
let SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10);
let UserModel = require("../models/users.model.js");

//parent Router
let authRouter = express.Router();

//Endpoint to register the user
authRouter.post("/register", async (req, res) => {
    try {
      // destructuring the req.body
      let { userName, age, email, password, role } = req.body;
      // finding if the user already registered or not
      const user = await UserModel.find({ userName });
      //if present - sending res as user already registered please login
      if (user.length > 0) {
        return res.status(307).json({ message: "user already registered, please login." });
      }
      //checking if the role as value of "creator" - if found adding "viewer" role to it.
      if(roles.includes("creator")) {
          roles.push("viewer")
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
            email,
            roles:roles,
            booksCreated:[]
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

  //exporting authRouter
  module.exports = authRouter