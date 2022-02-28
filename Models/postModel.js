const path = require("path");

const conn = require(path.join(__dirname + "/../DAO/conn.js"));

const mongoose = conn.mongoose;

const postSchema = {
  title: String,
  date: Date,
  post: String
}

exports.Post = mongoose.model("Post", postSchema);
