require("dotenv").config({path: "./config/config.env"});

const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");
const ejs = require("ejs");
const path = require("path");

// Connect to database
connectDB()

// Initiate app and EJS
const app = express();
app.set("view engine", "ejs");

// Static folder
app.use(express.static(path.join(__dirname, "public")))

// Use morgan to log any requests
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Routes
app.use("/", require("./routes/index"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));