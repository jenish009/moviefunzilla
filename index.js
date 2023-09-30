const express = require("express");
require("dotenv").config();
require('./config/dbConnection');
const cors = require("cors"); // Import the cors middleware

const app = express();
app.use(express.json());

// Use the cors middleware to allow all origins
app.use(cors());

const { moviesRoutes } = require("./routers");
app.use("/", moviesRoutes);

const port = process.env.PORT || 3000; // Use a default port if PORT is not defined in .env

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
