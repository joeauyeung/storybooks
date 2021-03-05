require("dotenv").config({path: "./config/config.env"});

const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");
const ejs = require("ejs");

connectDB()


const app = express();
app.set("view engine", "ejs");

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));