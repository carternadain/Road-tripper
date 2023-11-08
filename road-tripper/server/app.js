const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Choose a port for your app

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
