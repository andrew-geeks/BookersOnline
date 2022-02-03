const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    bookid:{
        type:Number,
        required:true
    },
    bookname:{
        type:String,
        required:true
    },
    genre:{
        type: String,
        required:true
    },
    authorid:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imglink:{
        type:String,
        required:true
    },
})

const AuthorSchema = new mongoose.Schema({
    authorid:{
        type:Number,
        required:true
    },
    authorname:{
        type:String,
        required:true
    } 
})

const Book = mongoose.model("Book",BookSchema);
const Author = mongoose.model("Author",AuthorSchema);

module.exports = {Book,Author};
