const express = require("express");
require("dotenv").config();
require('./config/dbConnection')

const app = express();
app.use(express.json());

const { moviesRoutes } = require("./routers");
app.use("/", moviesRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
