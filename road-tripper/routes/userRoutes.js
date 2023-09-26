// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Import the ensureAuthenticated middleware here if you haven't already

// Display the login form
router.get('/login', (req, res) => {
  res.render('login'); // Render the login view
});

// Handle login form submission
router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard', // Redirect to the dashboard on successful login
    failureRedirect: '/login',    // Redirect back to the login page on failed login
    failureFlash: true,           // Enable flash messages for failed login
  })
);

// Protect the dashboard route using the ensureAuthenticated middleware
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render('dashboard', { user: req.user }); // Render the dashboard view
});

// Add other user-related routes as needed

module.exports = router;
