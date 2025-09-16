// import mongoose 
const mongoose = require("mongoose");

// route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId, // konsi post pe comment kar rhe ho
        ref: "Post", // reference to the post model
    },
    user:{
        type:String, // kon comment kar rha haii
        required:true,
    },
    body:{
        type:String, // kya comment kar rha haii.
        required:true,
    }
});
 

// export
module.exports = mongoose.model("Comment",commentSchema);