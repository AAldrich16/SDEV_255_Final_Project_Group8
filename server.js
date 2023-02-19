const express = require('express');
const router = require('./router');

const app = express();
app.use(express.static('pages')); // middleware to serve static files from /pages directory
app.use(router);  // all routes are sent through ./router.js

const port = 3000;
app.listen(3000, () => {
  console.log(`app listening on port ${port}`);
})