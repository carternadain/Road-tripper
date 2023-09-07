// app.js
const express = require('express');
// const cors = require('cors');
const app = express();
// const port = 5000; // Choose a port for your API
const session = require('express-session');
const passport = require('passport');
const User = require('./models/user');

app.use(passport.initialize());
app.use(passport.session());


app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.redirect('/login'); // Redirect to login page after successful registration
  } catch (err) {
    console.error(err);
    res.status(500).send('Error registering user.');
  }
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true, // Enable flash messages for failed login
}));

// ... Other routes ...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Define your API routes here (e.g., /api/nationalparks, /api/activities)

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });