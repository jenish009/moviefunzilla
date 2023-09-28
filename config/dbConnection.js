const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kavathiyajenish008:123456jkJK@cluster0.4tcqzep.mongodb.net/moviesWeb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

