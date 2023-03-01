require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');

const homeRouter = require('./routes/home');
const courseRouter = require('./routes/course');
const createRouter = require('./routes/create');
const addRouter = require('./routes/add');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const editCourseRouter = require('./routes/editCourse');

// Express App
const app = express();

app.use(bodyparser.json()); //utilizes the body-parser package
app.use(cookieParser());

// Connect to database
const dbUri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@sdev-255-final.aqsnzds.mongodb.net/course-registration-db?retryWrites=true&w=majority`
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
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// Routes
app.use('/', homeRouter)
app.use('/course', courseRouter);
app.use('/create', createRouter);
app.use('/add', addRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/editCourse', editCourseRouter);

// 404 page
app.use((req, res) => {
  res.status(404).render('404.ejs', { title: '404' });
});