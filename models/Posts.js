const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  userId:{
      type:String,
      required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },

  posts: [{
     type: String }],

  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  toy: {
    type: String,
    required: true
  },

  toyCategory: {
    type: String,
    enum: ['Action figures',
      'Animals',
      'Cars', 'Radio controlled',
      'Construction toys',
      'Creative toys',
      'Dolls',
      'Educational toys',
      'Electronic toys',
      'Generic'],
    default: 'Generic'
  }
});

module.exports = User = mongoose.model("posts", PostSchema);