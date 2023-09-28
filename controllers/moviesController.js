const { moviesModel } = require("../models");

const getAllMovies = async (req, res) => {
  try {
    let { moviename, categoryFilter, page, limit = 30 } = req.query;
    let filter = {};
    let offset = (page - 1) * limit;
    if (moviename) {
      const regex = new RegExp(moviename, "i");
      filter = {
        $or: [{ name: { $regex: regex } }, { description: { $regex: regex } }],
      };
    }
    if (categoryFilter) {
      filter.category = { $in: categoryFilter };
    }

    let data = await moviesModel
      .find(filter)
      .sort({ releaseYear: -1 })
      .skip(offset)
      .limit(limit);

    res.status(200).send({ success: true, data: data });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

const createMovie = async (req, res) => {
  try {
    let body = req.body;
    console.log(body);
    let data = await moviesModel.insertMany(body);

    res.status(200).send({ success: true, data: data });
  } catch (error) {
    console.log("error", error);
    res.status(400).send({ success: false, message: error.message });
  }
};

const featureMovie = async (req, res) => {
  try {
    let data = await moviesModel.find().sort({ popularRank: -1 }).limit(10);

    res.status(200).send({ success: true, data: data });
  } catch (error) {
    console.log("error", error);
    res.status(400).send({ success: false, message: error.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    let { _id } = req.query;
    
    let data = await moviesModel.findOneAndUpdate(
      { _id: _id },
      { $inc: { popularRank: 1 } },
      { new: true } 
    );

    if (!data) {
      return res.status(404).send({ success: false, message: 'Movie not found' });
    }

    res.status(200).send({ success: true, data: data });
  } catch (error) {
    console.log("error", error);
    res.status(400).send({ success: false, message: error.message });
  }
};


module.exports = {
  getAllMovies,
  createMovie,
  featureMovie,
  getMovieById
};
