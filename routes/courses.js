const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('courses.ejs');
})

module.exports = router;