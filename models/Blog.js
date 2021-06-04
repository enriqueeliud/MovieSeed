const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const BlogSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Creator: {
    type: String,
    required: true,
  },
  Created_at: {
    type: Date,
    default: Date.now,
  },
  Body: {
    type: String,
    required: true
  },
  Likes: {
    type: Number,
  },
  Views: {
    type: Number,
  },
});

const Blog = mongoose.model("Blog",BlogSchema, "blog");
module.exports = Blog;