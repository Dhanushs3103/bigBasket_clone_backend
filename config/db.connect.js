//packages
let mongoose = require("mongoose")

//local imports
let MONGO_URL = process.env.MONGO_URL

//Connecting to the DB
let connection = mongoose.connect(MONGO_URL);

//exporting the connection
module.exports = connection;