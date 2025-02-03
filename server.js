const express = require('express');
const cors = require('cors');
const app = express();

// Middleware setup
app.use(cors());

// Endpoint to return the required information
app.get('/api/info', (req, res) => {
  const currentDateTime = new Date().toISOString();
  res.json({
    email: 'jenniferadeghor@gmail.com',
    current_datetime: currentDateTime,
    github_url: 'https://github.com/Avera23git/HNG12'
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
