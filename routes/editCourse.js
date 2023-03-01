const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const User = require("../models/users");
const courseHandle = require("../controllers/editCourse");

// Course Page
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    await User.findOne({"_id": req.cookies.user}).then(function(user){
        if(user){
            Course.findById(id)
                .then( data => {
                    console.log(data);
                    res.render('editCourse.ejs', { Course: data, usr: user});
                })
                .catch( err => {
                    console.log(err); -
                        res.sendStatus(500);
                });
        }else{
            res.redirect('/login');
        }
    });

});

router.post('/:id/save', async (req, res) => {
    const id = req.params.id;
    const course = {
        name: req.body.name,
        subject: req.body.subject,
        description: req.body.description,
        image: req.body.image,
        color: req.body.color,
        credits: req.body.credits
    }
    courseHandle.updateCourse(id, course);
    res.redirect(`../../course/${id}`)
});

module.exports = router;