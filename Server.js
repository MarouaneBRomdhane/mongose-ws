const express = require("express");
const connectDB = require("./Configuration/Config");
const user_router = require("./Router/Router");
const app = express();
const port = 8000;
app.use(express.json());
connectDB();
app.use("/user", user_router);
app.listen(port, console.log("marwen is running"));
