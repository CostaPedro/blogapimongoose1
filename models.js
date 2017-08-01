const mongoose = require('mongoose');

// this is our schema to represent a blog
const blogSchema = mongoose.Schema({
  author: {firstName: String, lastName: String},
  title: {type: String, required: true},
  content: {type: String, required: true},
  created: {type: Date}
});

blogSchema.virtual('authorName').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim();
});

blogSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    author: this.authorName,
    content: this.content,
    title: this.title,
    created: this.created
  };
}

const Blogs = mongoose.model('Blogs', blogSchema);

module.exports = {Blogs};