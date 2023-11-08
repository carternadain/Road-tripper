const express = require('express');
const User = require('../models/User'); // Import the User model

const userRouter = express.Router();

// Route for user registration (signup)
userRouter.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Route for user authentication (login)
userRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      res.status(401).json({ error: 'Authentication failed' });
    } else {
      res.status(200).json({ message: 'Authentication successful' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Authentication failed' });
  }
});

module.exports = userRouter;
