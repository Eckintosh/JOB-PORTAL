require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const app = express();

//Middleware to handle cors 
app.use(
    cors({
        origin : "*",
        methods : ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders : ["Content-Type", "Authorization"],
    })
);

// Connect Database
connectDB();


// Middleware to handle json data
app.use(express.json());

