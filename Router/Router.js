const express = require("express");
const {
  createuser,
  getuser,
  deleteuser,
  updateuser,
} = require("../Controller/Controller");
const user_router = express.Router();
user_router.post("/create", createuser);
user_router.get("/find", getuser);
user_router.delete("/delete/:id", deleteuser);
user_router.put("/update/:id", updateuser);

module.exports = user_router;
