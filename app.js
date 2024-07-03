const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const static = express.static(__dirname + '/public');

const configRoutes = require('./routes');
const exphbs = require('express-handlebars');

app.use(cookieParser());
app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
  session({
    name: 'AuthCookie',
    secret: "some secret string!",
    saveUninitialized: true,
    resave: false
  })
);

// if user isn't logged in, route to login page
app.use('/user', (req, res, next) => {
  console.log(req.session.id);
  if (!req.session.user) {
    req.session.clicked = '/user';
    res.status(403).render('site/login');
  } else {
    next();
  }
});

// if user isn't logged in, route to login page
app.use('/cart', (req, res, next) => {
  console.log(req.session.id);
  if (!req.session.user) {
    req.session.clicked = '/cart';
    res.status(403).render('site/login');
  } else {
    next();
  }
});

app.use(async (req, res, next) => {
  if(req.session.user){
    console.log(`[${new Date().toUTCString()}]: ${req.method} ${req.originalUrl} (Authenticated User)`);
  } else {
    console.log(`[${new Date().toUTCString()}]: ${req.method} ${req.originalUrl} (Non-Authenticated User)`);
  }
  next();
});

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

configRoutes(app);

const hbs = exphbs.create({});

hbs.handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});


app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});