const express = require("express");
const connectDB = require("./Configuration/Config");
const product_router = require("./Router/Router");
const app = express();
const port = 8001;
app.use(express.json());
connectDB();
app.use("/product", product_router);
app.listen(port, console.log("marwen is running"));
