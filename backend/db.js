const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/iwarehouse?readPreference=primary&appname=iwarehouse&directConnection=true&ssl=false";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to iwarehouse-database");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
};

module.exports = connectToMongo;
