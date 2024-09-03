//packages
let dotenv = require("dotenv").config();
let express = require("express")
let cors = require("cors")

//local imports
let PORT = parseInt(process.env.PORT,10) || 3005;
let connection = require("./config/db.connect.js");
const homeRouter = require("./routes/home.routes.js");
const authRouter = require("./routes/auth.routes.js");


//initializing the express
let app = express();

//middlewares -
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }))
app.use(express.json()) // for parsing the req.body
app.use("/home-page",homeRouter) // Parent router for all home page related content
app.use("/auth",authRouter) // Parent router for registration and login

//Home Route for the server
app.get("/",(req,res)=>{
    res.status(200).send("Server is running fine")
})

//server is listening at the PORT
app.listen(PORT,async()=>{
  try {
    await connection;
    console.log(`Server is running at PORT - ${PORT} and connected the database`)
  } catch (error) {
    console.log(error)
  }
})
