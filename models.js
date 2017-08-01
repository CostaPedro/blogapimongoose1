const mongoose = require('mongoose');

// this is our schema to represent a restaurant
const restaurantSchema = mongoose.Schema({
  // the `name` property is String type and required
  name: {type: String, required: true},
  borough: {type: String, required: true},
  cuisine: {type: String, required: true},
  // the `address` property is an object
  address: {
    building: String,
    // coord will be an array of string values
    coord: [String],
    street: String,
    zipcode: String
  },
  // grades will be an array of objects
  grades: [{
    // Date type!
    date: Date,
    grade: String,
    score: Number
  }]
});