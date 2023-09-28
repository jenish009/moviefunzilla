const express = require("express");
const router = express.Router();
const { moviesController } = require("../controllers");

router
  .get("/getAllMovies", moviesController.getAllMovies)
  .post("/createMovie", moviesController.createMovie)
  .get("/featureMovie", moviesController.featureMovie)
  .get("/getMovieById", moviesController.getMovieById)



module.exports = router;
