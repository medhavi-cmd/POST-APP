const mongoose = require("mongoose");
require("dotenv").config();

async function connectDb(){
    try{
        await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected to MongoDB");}
    catch(err){
        console.log("Error connecting to MongoDB", err);
        throw err;
    }
};

module.exports = connectDb;