const express = require('express');
const User = require("../models/users");
const courseHandle = require("../controllers/editCourse");
const router = express.Router();


router.get('/', async (req, res) => {
  await User.findOne({"_id": req.cookies.user}).then(function(user){
    if(user){
      res.render(`add.ejs`, { usr: user});
    }else{
      res.redirect('/login');
    }
  });
});

router.get('/deleteCourse/:id', async (req, res) => {
  const id = req.params.id;
  courseHandle.deleteCourse(id);
  res.redirect('/add')
});

module.exports = router;