const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const PORT = 3000

require('dotenv').config();
require('./db/connection')
require('./db/passport');
require('./Routes/index')

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(cookieParser());
app.use(session({
  secret: 'asdfghjkl',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use('/todo', require('./Routes/todoRoutes'))
app.use('/user', require('./Routes/userRoutes'))
app.use('/', require('./Routes/index'))

app.listen(3000, () => {
  console.log("I'm on port", PORT)
})