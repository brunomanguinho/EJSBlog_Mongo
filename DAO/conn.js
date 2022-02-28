const mongoose = require("mongoose");

exports.mongoose = mongoose;
exports.conn = mongoose.connect("mongodb://localhost:27017/blogDB", {useNewUrlParser: true});
