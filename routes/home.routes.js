//packages
let express = require("express")

//local imports
let BeautyModel  = require("../models/beauties.model.js")
let BestSellersModel = require("../models/bestSellers.model.js")
let BeveragesModel = require("../models/beverages.model.js")
let BottomSlidersModel = require("../models/bottomSliders.model.js")
let CleaningsModel = require("../models/cleanings.model.js")
let DailyStapleModal = require("../models/dailyStaples.model.js")
let FruitsAndVegiesModel = require("../models/fruitsAndVegies.model.js")
let KitchensModel = require("../models/kitchens.model.js")
let SmartBasketsModel = require("../models/smartBaskets.model.js")
let SnacksModel = require("../models/snacks.model.js")
let TopOffersModel = require("../models/topOffers.model.js")

//parent router
let homeRouter = express.Router();

//Endpoint to get data related to bestSellers
homeRouter.get("/best-sellers",async(req,res)=>{
    try {
      let DBdata = await BestSellersModel.find();
      //sending the response with data
      res.status(200).json({message:"Data Received Successfully",data:DBdata})
    } catch (error) {
        res.status(500).json({message:error})
    }
})

//Endpoint to get data related to smartBaskets
homeRouter.get("/smart-baskets",async(req,res)=>{
    try {
      let DBdata = await SmartBasketsModel.find();
      //sending the response with data
      res.status(200).json({message:"Data Received Successfully",data:DBdata})
    } catch (error) {
        res.status(500).json({message:error})
    }
})

//Endpoint to get data related to beauties
homeRouter.get("/beauty",async(req,res)=>{
    try {
      let DBdata = await BeautyModel.find();
      //sending the response with data
      res.status(200).json({message:"Data Received Successfully",data:DBdata})
    } catch (error) {
        res.status(500).json({message:error})
    }
})

//Endpoint to get data related to beverages
homeRouter.get("/beverages",async(req,res)=>{
    try {
      let DBdata = await BeveragesModel.find();
      //sending the response with data
      res.status(200).json({message:"Data Received Successfully",data:DBdata})
    } catch (error) {
        res.status(500).json({message:error})
    }
})

//Endpoint to get data related to bottomSliders
homeRouter.get("/bottom-sliders",async(req,res)=>{
    try {
      let DBdata = await BottomSlidersModel.find();
      //sending the response with data
      res.status(200).json({message:"Data Received Successfully",data:DBdata})
    } catch (error) {
        res.status(500).json({message:error})
    }
})

//Endpoint to get data related to cleanings
homeRouter.get("/cleanings",async(req,res)=>{
    try {
      let DBdata = await CleaningsModel.find();
      //sending the response with data
      res.status(200).json({message:"Data Received Successfully",data:DBdata})
    } catch (error) {
        res.status(500).json({message:error})
    }
})

//Endpoint to get data related to dailyStaples
homeRouter.get("/daily-staples",async(req,res)=>{
    try {
      let DBdata = await DailyStapleModal.find();
      //sending the response with data
      res.status(200).json({message:"Data Received Successfully",data:DBdata})
    } catch (error) {
        res.status(500).json({message:error})
    }
})

//Endpoint to get data related to fruitsAndVegies
homeRouter.get("/fruits-and-vegies",async(req,res)=>{
    try {
      let DBdata = await FruitsAndVegiesModel.find();
      //sending the response with data
      res.status(200).json({message:"Data Received Successfully",data:DBdata})
    } catch (error) {
        res.status(500).json({message:error})
    }
})

//Endpoint to get data related to snacks
homeRouter.get("/snacks",async(req,res)=>{
    try {
      let DBdata = await SnacksModel.find();
      //sending the response with data
      res.status(200).json({message:"Data Received Successfully",data:DBdata})
    } catch (error) {
        res.status(500).json({message:error})
    }
})

//Endpoint to get data related to topOffers
homeRouter.get("/top-offers",async(req,res)=>{
    try {
      let DBdata = await TopOffersModel.find();
      //sending the response with data
      res.status(200).json({message:"Data Received Successfully",data:DBdata})
    } catch (error) {
        res.status(500).json({message:error})
    }
})

//Exporting the parent router
module.exports = homeRouter;