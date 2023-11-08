const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const session = require('express-session');
const passport = require('passport');

app.use(session({
  secret: 'Afds!-fmvN-wmvL', 
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true,
}));

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('/dashboard', isAuthenticated, (req, res) => {
  res.send('Dashboard Page');
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
