const express = require('express');
const router = express.Router();
const Course = require('../models/course');

router.get('/', (req, res) => {
  res.render(`home.ejs`);
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