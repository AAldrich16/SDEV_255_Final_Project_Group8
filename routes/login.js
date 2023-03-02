const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/', async (req, res) => {
  await User.findOne({"_id": req.cookies.user}).then(function(user){
    if(!user){
      res.render(`login.ejs`);
    }else{
      res.redirect('/');
    }
  });
});

router.post('/', async function(req , res) {
  let username = req.body.username;
  let password = req.body.password;
  await User.findOne({"username": username}).then(function(user){
    if(user){
      console.log(user);

      if(password === user.password){
        res.cookie('user', user._id);
        res.redirect('/');
      }
    } else{
      throw new Error('no user');
    }
  });
});

// router.get('/logout', (req, res) => {
//   res.clearCookie('user');
//   res.redirect('/');
// })

module.exports = router;