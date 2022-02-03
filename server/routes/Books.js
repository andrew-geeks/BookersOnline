const {Book,Author} = require('../model.js')
const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();


// router.get('/',async (req,res)=>{
//     res.redirect();
// })

router.get('/:id',async (req,res)=>{
    const bookData = await Book.find({bookid:req.params.id})
    for( var i=0;i<bookData.length;i++){
        var authorData = await Author.find({authorid:bookData[i]['authorid']})
        bookData[i].set('authorname',authorData[0]['authorname'],{strict:false})
    }
    res.end(JSON.stringify(bookData));
})


module.exports=router;