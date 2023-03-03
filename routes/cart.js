const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const User = require("../models/users");
router.get('/', async (req, res) => {
    await User.findOne({"_id": req.cookies.user}).then(function(user){
        if(user){
            res.render(`cart.ejs`, { usr: user});
        }else{
            res.redirect('/login');
        }
    });
});
router.get('/getCart', async (req, res) => {
    await User.findOne({"_id": req.cookies.user}).then(function(user){
        Course.find({ "_id" : { $in : user.cart} } )
            .then( data => {
                res.send(data);
            })
            .catch(err => {
                console.log(err);
            });
    });
});
router.get('/removeCourse/:id', async (req, res) => {
    const id = req.params.id;

    User.updateOne({ _id: req.cookies.user}, {
    $pull: { cart:  id}
    }).then( () => {
        res.redirect('/cart');
    }).catch(err => {
            console.log(err);
    })
});
router.get('/purchaseCart', async (req, res) => {
    await User.findOne({"_id": req.cookies.user}).then(function(user) {
        Course.updateMany({$in: user.cart}, {$push: {'students': req.cookies.user}}).then(() => {
            User.updateOne({ _id: req.cookies.user}, {
                $pull: { cart:  {$in: user.cart}}
            }).then( () => {
                res.redirect('/');
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        });

    });
});

module.exports = router;