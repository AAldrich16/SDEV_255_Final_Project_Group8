const express = require('express');
const router = express.Router();
const Course = require('../models/course');

router.get('/', (req, res) => {
  res.render('create.ejs');
});

router.post('/', (req, res) => {
  console.log(req.body);
  // Check if document already exists
  Course.exists({ name: req.body.name })
  .then( data => {
    // If document exists sent code 204 and exit function
    if (data !== null) {
      res.status(204).end()
      return;
    }
    const course = new Course(req.body);
    course.save()
    .then(() => {
      console.log('new course saved to database');
      res.redirect('../')
    })
    .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err)
  });
  
  
})

module.exports = router;