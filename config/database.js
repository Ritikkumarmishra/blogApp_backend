const mongoose = require("mongoose");

require("dotenv").config(); // this is use to load all configuration of .env file into process object.
const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        // userNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(console.log("DB Connected successfully"))
    .catch((error) => {
        console.log("DB facing connection Issues");
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithDb;