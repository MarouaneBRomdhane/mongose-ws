const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Test");
    console.log("Database has successfully connected!");
  } catch (error) {
    console.log("Database has failed to connect, please try again!");
  }
};
module.exports = connectDB;
