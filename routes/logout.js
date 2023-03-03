const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    if(req.cookies.user){
        res.clearCookie('user');
        res.redirect('/login');
    }else{
        res.redirect('/login');

    }
});
module.exports = router;