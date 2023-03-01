const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const User = require("../models/users");

router.get('/', async (req, res) => {
  await User.findOne({"_id": req.cookies.user}).then(function(user){
    if(user){
      res.render(`home.ejs`, { usr: user});
    }else{
      res.redirect('/login');
    }
  });
});

router.get('/getAllCourses', (req, res) => {
  Course.find()
  .then( data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
  });
});

module.exports = router;