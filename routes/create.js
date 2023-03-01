const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const { createCourse } = require('../controllers/editCourse');

router.get('/', (req, res) => {
  res.render('create.ejs');
});

router.post('/', (req, res) => {
  createCourse(req.body)
  .then(() => {
    console.log(`New course ${req.body.name} added to database`);
    res.redirect('../');
  })
  .catch( err => {
    console.log(`${err}`);
    res.status(204).end();
  });
});


module.exports = router;