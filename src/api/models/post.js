const mongoose = require('mongoose');

// Define the Mongoose schema for posts
const PostSchema = new mongoose.Schema({
    id: Number,
    score: Number,
    title: String,
    commentCount: Number,
    creationDate: Date,
    viewCount: Number,
    answerCount: Number,
    tags: [String],
    ownerUserId: Number
  });

// Compile model from schema
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;