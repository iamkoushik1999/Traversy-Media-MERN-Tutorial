const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

// Connect Database
connectDB();

// Start express
const app = express();
const port = process.env.PORT || 5000;

// JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//Error Handler
app.use(errorHandler);

// Confirmation on server
app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
