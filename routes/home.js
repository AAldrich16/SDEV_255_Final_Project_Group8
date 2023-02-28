const express = require('express');
const router = express.Router();
const { getAllCourses } = require('../controllers/getCourses');

router.get('/', (req, res) => {
  res.render(`home.ejs`);
});

router.get('/getAllCourses', (req, res) => {
  getAllCourses()
  .then( data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err)
    res.sendStatus(500);
  });
});

module.exports = router;