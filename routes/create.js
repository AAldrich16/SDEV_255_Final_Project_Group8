const express = require('express');
const router = express.Router();
const Course = require('../models/course');

router.get('/', async (req, res) => {
  await User.findOne({"_id": req.cookies.user}).then(function(user){
    if(user){
      res.render(`create.ejs`, { usr: user});
    }else{
      res.redirect('/login');
    }
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  createCourse(req.body)
  .then(() => {
    console.log('new course saved to database');
    // redirect to new course page [We'd have to pull the ID unless we set the id]
    res.redirect('/')
  })
  .catch( err => {
    console.log(`${err}`);
    res.status(204).end();
  });
});

module.exports = router;