const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
  username: {type: String, required: true},
  // "image": "https://static.vecteezy.com/system/resources/previews/000/201/235/original/vector-male-teacher-avatar.png",
  role: {type: String, required: true}
}, { timestamps: true}
);

module.exports = user;