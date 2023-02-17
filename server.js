const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.write('<h1>Group 8 Final Project</h1>');
  res.end();
})

const port = 3000;
app.listen(3000, () => {
  console.log(`app listening on port ${port}`);
})