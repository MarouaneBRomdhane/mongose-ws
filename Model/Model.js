const mongoose = require("mongoose");
const users_schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("users", users_schema); // created a collection called "users" and the objects are the schema i added
