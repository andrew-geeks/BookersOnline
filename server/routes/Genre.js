const {Book,Author} = require('../model.js')
const express = require('express');

const router = express.Router();

router.get('/',async(req,res)=>{
    const genre = await Book.distinct("genre")
    res.end(JSON.stringify(genre));
});

router.get('/:getGenre',async (req,res)=>{
    const bookData = await Book.find({genre:req.params.getGenre});
    for( var i=0;i<bookData.length;i++){
        var authorData = await Author.find({authorid:bookData[i]['authorid']})
        bookData[i].set('authorname',authorData[0]['authorname'],{strict:false})
    }
    res.end(JSON.stringify(bookData));
})


module.exports=router;