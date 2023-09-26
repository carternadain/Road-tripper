// app.js
// server.js
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

// ... Other middleware setup ...

// Use EJS as the view engine (or your preferred templating engine)
app.set('view engine', 'ejs');
app.set('views', 'views'); // Set the views directory

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Import your user routes
const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);

// ... Other route imports and app configurations ...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





// const express = require('express');
// // const cors = require('cors');
// const app = express();
// // const port = 5000; // Choose a port for your API
// const session = require('express-session');
// const passport = require('passport');
// const User = require('./models/user');

// app.use(passport.initialize());
// app.use(passport.session());


// app.post('/register', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const newUser = new User({ username, password });
//     await newUser.save();
//     res.redirect('/login'); // Redirect to login page after successful registration
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error registering user.');
//   }
// });

// app.post('/login', passport.authenticate('local', {
//   successRedirect: '/dashboard',
//   failureRedirect: '/login',
//   failureFlash: true, // Enable flash messages for failed login
// }));

// // ... Other routes ...

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Define your API routes here (e.g., /api/nationalparks, /api/activities)

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });