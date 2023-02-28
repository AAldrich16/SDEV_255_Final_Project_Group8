const express = require('express');
const router = express.Router();
const Course = require('../models/course');

router.get('/', (req, res) => {
  res.render('create.ejs');
});

router.post('/', (req, res) => {
  const course = new Course(req.body);
  course.save()
  .then(() => {
    console.log('new course saved to database');
    // redirect to new course page
  })
  .catch(err => consolelog(err));
})

module.exports = router;