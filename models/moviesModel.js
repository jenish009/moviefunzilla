const mongoose = require("mongoose");

// Define the Movie Schema
const moviesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
    },
    downloadUrl: {
      type: String,
    },
    screenshots: [
      {
        type: String,
      },
    ],
    genre: {
      type: String,
      enum: [
        "Action",
        "Adventure",
        "Comedy",
        "Drama",
        "Horror",
        "Sci-Fi",
        "Other",
      ],
    },
    category: {
      type: Array,
    },
    // Additional fields specific to a movie download website
    releaseYear: {
      type: Number,
    },
    language: {
      type: String,
    },
    duration: {
      type: Number,
    },
    fileSize: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    popularRank: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // Add timestamps
    versionKey: false, // Remove version key
  }
);

const MoviesModel = mongoose.model("MoviesModel", moviesSchema);

module.exports = MoviesModel;
