// import mongoose
const mongoose=require("mongoose");


// route handler
const postSchema = new mongoose.Schema({
    title: {
        type:String,  // post ka title
        required:true,
    },
    body:{
        type:String, // post ki body
        required:true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,  // konsi id bala user like kar rha haii...
        ref: "Like",
    }],
    comments: [{ 
        type: mongoose.Schema.Types.ObjectId,  // konsi id bala user comment kar rha haii..
        ref: "Comment",
    }]
});



// exports
module.exports = mongoose.model("Post", postSchema);