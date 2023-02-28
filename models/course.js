const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {type: String, required: true},
  subject: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String, required: false},
  color: {type: String, required: true},
  credits: {type: Number, required: true},
  teacher: {type: String},
  students: {type: Array}
}, { timestamps: true}
);

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;