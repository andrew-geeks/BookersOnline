const express = require('express');
const bodyParser = require('body-parser')
const {MongoClient} = require('mongodb');
const home = require('./routes/home');
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
async function mongoConnect(){
    const client = new MongoClient("mongodb+srv://bksonline:<bks@2022>@cluster0.b0wty.mongodb.net/bookersonline?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();   
    console.log("done");
}


app.use("/",home);

app.listen(4000,()=>{
    console.log("server is running");
    mongoConnect();
})

