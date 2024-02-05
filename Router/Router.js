const express = require("express");

const {
  createproduct,
  getproduct,
  updateproduct,
  payment,
} = require("../Controller/Controller");
const product_router = express.Router();
product_router.post("/create", createproduct);
product_router.get("/find", getproduct);
product_router.put("/update/:id", updateproduct);
product_router.post("/create-checkout-session", payment);
module.exports = product_router;
