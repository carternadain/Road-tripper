// app.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; // Choose a port for your API

// Middleware
app.use(cors());
app.use(express.json());

// Define your API routes here (e.g., /api/nationalparks, /api/activities)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});