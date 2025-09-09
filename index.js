const express=require("express");
const app=express();

require("dotenv").config(); // this is used to load all configuration of .env file into process object
const PORT=process.env.PORT || 3000;

// middleware used to parse request body
app.use(express.json());

const blog = require("./routes/blog")

// mount 
app.use("/api/v1",blog);

const connectWithDb = require("./config/database");

connectWithDb();

// start the server

app.listen(PORT, () => {
    console.log(`App is started at port no ${PORT}`);
})

app.get("/", (req,res) =>{
    res.send(`<h1>This is homepage babyyyyy</h1>`)
})