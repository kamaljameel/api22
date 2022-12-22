const mongoose = require("mongoose");



const connectDB = (uri) => {
    console.log("connected database")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
} 

module.exports = connectDB;



