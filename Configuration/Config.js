const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// Increase the limit to handle larger payloads

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Products");
    console.log("Database has successfully connected!");
  } catch (error) {
    console.log("Database has failed to connect, please try again!");
  }
};

module.exports = connectDB;
