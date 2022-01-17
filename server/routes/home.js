const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const data = [{
        "id":1,
        "name":"home",
        "msg":"Home Page"
    }]
    res.end(JSON.stringify(data));
})


module.exports=router;

/*
username: bksonline
password: bks@2022
*/