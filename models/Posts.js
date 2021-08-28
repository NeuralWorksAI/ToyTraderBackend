const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },

  posts:[{type: String}],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("posts", UserSchema);