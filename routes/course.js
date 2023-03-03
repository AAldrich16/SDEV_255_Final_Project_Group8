const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const User = require('../models/users');

// Course Page
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  Course.findById(id)
  .then( async (data) => {
    console.log(data);
    await User.findOne({"_id": req.cookies.user}).then(function(user){
    if(user){
      res.render('course.ejs', { Course: data, usr: user});
    }else{
      res.redirect('/login');
    }
    });
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
router.get('/dropCourse/:id', async (req, res) => {
  const id = req.params.id;

  Course.updateOne({ _id: id}, {
    $pull: { students:  req.cookies.user}
  }).then( () => {
    res.redirect('/');
  }).catch(err => {
    console.log(err);
  })
});
module.exports = router;