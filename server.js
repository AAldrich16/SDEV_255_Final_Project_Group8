const express = require('express');
const router = require('./router');
const port = 3000;

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public')); 
app.use(router);  

app.listen(3000, () => {
  console.log(`app listening on port ${port}`);
})