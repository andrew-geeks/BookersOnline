const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const home = require('./routes/home');
const books =  require('./routes/Books');
const cors = require("cors");

//app
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors(
    {
        origin:"*",
        methods:['GET','POST'],
        credentials:true
    }
))

//mongoAtlas conn.
const url = "mongodb+srv://bksonline:TS2cTEPhbM2ETHc3@cluster0.b0wty.mongodb.net/bookersonline?retryWrites=true&w=majority";
const connectionParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true 
}
mongoose.connect(url,connectionParams)
    .then(()=>{
        console.log("db connected");
    })
    .catch((err)=>{
        console.log("ERROR:"+err);
    })





//routes
app.use("/",home);
app.use("/books",books);

//port
app.listen(4000,()=>{
    console.log("server is running");
})


