const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true},
  // "image": "https://static.vecteezy.com/system/resources/previews/000/201/235/original/vector-male-teacher-avatar.png",
  role: {type: String, required: true}
}, { timestamps: true}
);

const User = mongoose.model('User', userSchema);

module.exports = User;