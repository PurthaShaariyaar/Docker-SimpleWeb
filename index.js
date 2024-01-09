// Import required modules
const express = require('express');

// Create an express application
const app = express();

/**
 * Route handler to send a message to the root route of application
 */
app.get('/', (req, res) => {
  res.send('Hi there');
});

// Start server and listen on port 8080
app.listen(8080, () => {
  console.log('Listenting on port 8080...');
});
