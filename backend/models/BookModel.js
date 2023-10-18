const {Schema, model} = require('mongoose');

const BookSchema=new Schema({
    bookName : {
        type : String,
        required : true
    },
    authorName : {
        type : String,
        required : true
    },
    publishedYear : {
        type : Number,
        required : true
    },
    bookPrice : {
        type : Number,
        required : true
    }

},
{
    timestamps : true
})

module.exports=new model("bookstore", BookSchema)

