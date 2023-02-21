const express = require('express');
const router = express.Router();
const path = require('path');
const mime = require('mime');

/*
  GET REQUESTS
*/
// Get Course Information [USING THIS JUST TO IMPLEMENT INTO HTML, CAN BE REMOVED FOR CONTROLLER]
router.get('/getCourses', (req, res) => {
  const filePath = path.join(__dirname, 'models', 'Courses.JSON');
  res.setHeader('Content-Type', mime.getType(filePath));
  res.sendFile(filePath);
});
// Home
router.get('/', (req, res) => {
  res.sendFile(`${__dirname}/pages/home.html`);
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
