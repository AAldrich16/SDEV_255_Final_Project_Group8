const express = require('express');
const router = express.Router();
const { getCourse } = require('../controllers/getCourses');

// Course Page
router.get('/:id', (req, res) => {
  const id = req.params.id;
  getCourse(id)
  .then( data => {
    console.log(data);
    res.render('course.ejs', { Course: data});
  })
  .catch( err => {
    console.log(err); -
    res.sendStatus(500);
  });
});

module.exports = router;