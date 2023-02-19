const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(`${__dirname}/pages/home.html`);
});

router.get('*', (req, res) => {
  res.sendFile(`${__dirname}/pages/404.html`);
})

module.exports = router;
