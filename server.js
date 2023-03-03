require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');

const homeRouter = require('./routes/home');
const courseRouter = require('./routes/course');
const createRouter = require('./routes/create');
const addRouter = require('./routes/add');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const editCourseRouter = require('./routes/editCourse');
const cartRouter = require('./routes/cart');
const User = require("./models/users");

// Express App
const app = express();

// app.use(bodyparser.json()); // bodyparser doesn't seem to do anything
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
app.use(express.urlencoded({ extended: true }));  // This middleware is parsing the body
app.use(express.static('public'));


// Routes
app.use('/', homeRouter)
app.use('/course', courseRouter);
app.use('/create', createRouter);
app.use('/add', addRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/editCourse', editCourseRouter);
app.use('/cart', cartRouter);

// 404 page
app.use(async (req, res) => {
    await User.findOne({"_id": req.cookies.user}).then(function(user) {
        if (user) {
            res.status(404).render('404.ejs', {title: '404', usr: user});
        } else {
            res.render('/login');
        }
    });
});