const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course = new Schema({
  name: {type: String, required: true},
  subject: {type: String, required: true},
  description: {type: String, required: true},
  // "image": "https://www.cmuse.org/wp-content/uploads/2020/06/learn-calculus-lessons-online.jpg",
  // "color":  "255, 42, 4",
  credits: {type: Number, required: true},
  teacher: {type: String},
  students: {type: Array}
}, { timestamps: true}
);

module.exports = course;