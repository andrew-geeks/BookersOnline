const express = require('express');
const bodyParser = require('body-parser')
const routeHandler = require('./routes/handler');
const cors = require("cors");

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
app.use("/",routeHandler);

app.listen(4000,()=>{
    console.log("server is running");
})

