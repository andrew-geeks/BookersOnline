const {Book,Author} = require('../model.js')
const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();


router.get('/',async (req,res)=>{
    const bookData = await Book.find({})
    for( var i=0;i<bookData.length;i++){
        var authorData = await Author.find({authorid:bookData[i]['authorid']})
        bookData[i].set('authorname',authorData[0]['authorname'],{strict:false})
    }
    res.end(JSON.stringify(bookData)); //posting to frontend
})




//data-entry
router.post('/testBook',async (req,res)=>{
    const book = new Book(req.body);
    try{
        await book.save()
        res.send("sucess");
    }
    catch(err){
        console.log(err)
    }
})

router.post('/testAuthor',async (req,res)=>{
    //do-not use postman
    const author = new Author({
        authorid: 1004,
        authorname: 'Morgan Housel'
    })
    try{
        await author.save()
        res.send('success');
    }
    catch(err){
        console.log(err);
    }
})



module.exports=router;

/*
username: bksonline
password: TS2cTEPhbM2ETHc3
*/