require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const homeRouter = require('./routes/home');
const courseRouter = require('./routes/course');
const createRouter = require('./routes/create');
const coursesRouter = require('./routes/courses');
const addRouter = require('./routes/add');
const loginRouter = require('./routes/login');


// Express App
const app = express();


// Connect to database
const dbUri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@sdev-255-final.aqsnzds.mongodb.net/?retryWrites=true&w=majority`
mongoose.set('strictQuery', true);
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to database');
  const port = process.env.PORT || 3000;
  app.listen(3000, () => {
    console.log(`App listening on port ${port}`);
  });
})
.catch(err => { console.log(err) });


// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public')); 


// Routes
app.use('/', homeRouter)
app.use('/course', courseRouter); 
app.use('/create', createRouter);
app.use('/courses', coursesRouter);
app.use('/add', addRouter);
app.use('/login', loginRouter);


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
