const express = require('express');
const router = express.Router();
const Course = require('../models/course');

router.get('/', (req, res) => {
  res.render('create.ejs');
});

router.post('/', (req, res) => {

  //We need to implement a check to see if course exists already

  const course = new Course({
    name: req.body.name,
    subject: req.body.subject,
    description: req.body.desc,
    image: req.body.image,
    color: req.body.color,
    credits: req.body.credits
  });
  course.save()
  .then(() => {
    console.log('new course saved to database');
    // redirect to new course page [We'd have to pull the ID unless we set the id]
    res.redirect('/')
  })
  .catch(err => console.log(err));
})

module.exports = router;