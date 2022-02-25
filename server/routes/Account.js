const jwt = require('jsonwebtoken'); //-uninstall this lib
const md5 = require('md5');
//const popup = require('node-popup'); //uninstall
const express = require('express');
const {User} = require('../model.js');
const router = express.Router();





router.post('/signup', async(req,res)=>{
    const newUser = new User({
        fullname:req.body.name,
        email:req.body.email,
        password:md5(req.body.password)
    })
    await newUser.save((err)=>{
        if(err){
            //popup.alert("test")
            console.log(err);
            res.redirect("",)
            res.end(JSON.stringify({error:"mail already in use!"}));
            res.end()
        }
        else{
            console.log("done!")
        }
    })
    //console.log(req.body)
})






module.exports = router;
