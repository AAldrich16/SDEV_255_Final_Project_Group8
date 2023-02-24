const express = require('express');
const router = express.Router();
const getAllCourses = require('./controllers/getAllCourses');


/*
  GET REQUESTS
*/
// Home
router.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/home.html`);
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
  res.sendFile(`${__dirname}/views/add.html`);
});

// Course Page
router.get('/course/:id', (req, res) => {
  const courseID = req.params.id;
  res.render('course.ejs', { id: courseID});
});

// Login
router.get('/login', (req, res) => {
  res.sendFile(`${__dirname}/views/login.html`);
});

// 404
router.get('*', (req, res) => {
  res.sendFile(`${__dirname}/views/404.html`);
});

/*
  POST REQUESTS
*/
// TODO: router.post('/add', (req, res) => { addNewCourse() });

// TODO: router.post('/login', (req, res) =>{
//   console.log(Object.keys(res));
//   //console.log(res);
// });


module.exports = router;
