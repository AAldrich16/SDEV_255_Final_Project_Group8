const express = require('express');
const router = express.Router();
const User = require('../models/users');
const mongo = require('mongodb');
const ObjectId = mongo.ObjectID;
router.get('/', (req, res) => {
    res.render('register.ejs');
});
router.post('/', async function(req , res) {
    let username = req.body.username;
    let password = req.body.password;
    const newStudent = new User({
        _id: new ObjectId(),
        username: username,
        password: password,
        image: "https://i.imgur.com/7a5vLQ2.jpg",
        role: "student"
    });
    newStudent.save()
        .then(() => {
            console.log('new user saved to database');
            // redirect to new course page [We'd have to pull the ID unless we set the id]
            res.redirect('/login')
        })
        .catch(err => console.log(err));
})


module.exports = router;