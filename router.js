const express = require('express');
const router = express.Router();

/*
  GET REQUESTS
*/
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
