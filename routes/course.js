const express = require('express');
const router = express.Router();
const Course = require('../models/course');

// Course Page
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  Course.findById(id)
  .then( data => {
    console.log(data);
    res.render('course.ejs', { Course: data});
  })
  .catch( err => {
    console.log(err); -
    res.sendStatus(500);
  });
});

router.delete('/:id', (req, res) => {
  deleteCourse(req.params.id)
  .then(() => {
    res.redirect('../');
  })
  .catch(err => {
    console.log(err.message);
    res.status(204).end();
  })
});

router.put('/:id', (req, res) => {
  updateCourse(req.params.id, req.body)
  .then(() => {
    res.redirect(`/${req.params.id}`);
  })
  .catch(err => {
    console.log(err.message);
    res.status(204).end();
  })
})

module.exports = router;