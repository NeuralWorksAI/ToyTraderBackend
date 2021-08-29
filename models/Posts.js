const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
    // enum: [
    //   "action-figures",
    //   "stuffed-animals",
    //   "cars",
    //   "radio-controlled",
    //   "construction-toys",
    //   "creative-toys",
    //   "dolls",
    //   "educational-toys",
    //   "electronic-toys",
    //   "generic",
    // ],
    // default: "generic",
  },
});

module.exports = User = mongoose.model("posts", PostSchema);
