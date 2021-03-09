require("dotenv").config({path: "./config/config.env"});

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const ejs = require("ejs");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const connectDB = require("./config/db");

// Connect to database
connectDB()

// Passport config
require("./config/passport")(passport)

// Initiate app and EJS
const app = express();
app.set("view engine", "ejs");

// Sessions


app.use(session({
    secret: "practice app",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        collectionName: "sessions"
    })
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// Static folder
app.use(express.static(path.join(__dirname, "public")))

// Use morgan to log any requests
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));