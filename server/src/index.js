const express = require("express");
const cors = require("cors");
const path = require("path");
const errorHandler = require("./middleware/error");


const app = express();

app.use(express.json());
app.use(cors());

// router method and process
app.use("api/auth", require("./router/userAuth"));


// error handler 
app.use(errorHandler);

module.exports = app;