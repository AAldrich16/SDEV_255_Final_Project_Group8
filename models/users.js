const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {type: mongoose.Schema.Types.ObjectId, required: false},
  username: {type: String, required: true},
  password: {type: String, required: true},
  image: {type: String, required: true},
  role: {type: String, required: true}
}, { timestamps: true}
);

const User = mongoose.model('User', userSchema);

module.exports = User;