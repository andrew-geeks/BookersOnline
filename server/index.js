const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const home = require('./routes/home');
const books =  require('./routes/Books');
const genre = require('./routes/Genre');
const search = require('./routes/Search')
const account = require('./routes/Account');
const cors = require("cors");
const dotenv = require('dotenv');

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

dotenv.config();
const mdb_uid=`${process.env.MDB_UID}`; //mongodb username
const mdb_pwd=`${process.env.MDB_PSWD}`; //mongodb password

//mongoAtlas conn.
const url = "mongodb+srv://"+mdb_uid+":"+mdb_pwd+"@cluster0.b0wty.mongodb.net/bookersonline?retryWrites=true&w=majority";
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
app.use("/genre",genre);
app.use('/search',search);
app.use('/account',account);


//port
app.listen(4000,()=>{
    console.log("server is running");
})


