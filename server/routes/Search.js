const {Book,Author} = require('../model.js')
const express = require('express');

const router = express.Router();

router.get('/',async(req,res)=>{
    const sResult = await Book.find({$text:{$search:req.query.sQuery}})
    for( var i=0;i<sResult.length;i++){
        var authorData = await Author.find({authorid:sResult[i]['authorid']})
        sResult[i].set('authorname',authorData[0]['authorname'],{strict:false})
    }
    res.end(JSON.stringify(sResult));  
})

module.exports=router;