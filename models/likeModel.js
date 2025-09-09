// import mongoose
const mongoose = require("mongoose");


// route handler
const likeSchema = new mongoose.Schema({
        post:{
            type: mongoose.Schema.Types.ObjectId, // konsi post pe like kar rhe ho
            ref: "Post", // reference to the post model
        },
        user:{
            type:String, // konsa user like kar rha haii..
            required:true,
        }
});

// export 
module.exports = mongoose.model("Like", likeSchema);