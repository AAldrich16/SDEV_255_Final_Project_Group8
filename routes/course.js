const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const User = require("../models/users");

// Course Page
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  await User.findOne({"_id": req.cookies.user}).then(function(user){
    if(user){
      Course.findById(id)
          .then( data => {
            console.log(data);
            res.render('course.ejs', { Course: data, usr: user});
          })
          .catch( err => {
            console.log(err); -
                res.sendStatus(500);
          });
    }else{
      res.redirect('/login');
    }
  });

});

module.exports = router;