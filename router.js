const express = require('express');
const router = express.Router();
const getAllCourses = require('./controllers/getAllCourses');
const fs = require ('fs');



/*
  GET REQUESTS
*/
// Home
router.get('/', (req, res) => {
  res.sendFile(`${__dirname}/pages/home.html`);
});
router.get('/getAllCourses', (req, res) => {
  getAllCourses()
  .then( data => {
    data = JSON.parse(data);
    console.log(data);
    res.send(data);
  });
});

// Add
router.get('/add', (req, res) => {
  res.sendFile(`${__dirname}/pages/add.html`);
});
// Courses
router.get('/courses', (req, res) => {
  res.sendFile(`${__dirname}/pages/courses.html`);
});
// Login
router.get('/login', (req, res) => {
  res.sendFile(`${__dirname}/pages/login.html`);
})
// 404
router.get('*', (req, res) => {
  res.sendFile(`${__dirname}/pages/404.html`);
})

/*
  POST REQUESTS
*/
// TODO: router.post('/add', (req, res) => { addNewCourse() });

// TODO: router.post('/login', (req, res) =>{
//   console.log(Object.keys(res));
//   //console.log(res);
// });


module.exports = router;
