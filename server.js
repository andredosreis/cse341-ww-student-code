const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
const connectToDb = require('./database/db');
connectToDb();


// Allow cross-origin requests
app.use(cors());

// Sample data that matches what the frontend expects
const data = [
  {
    id: 1,
    name: "Example Item",
    description: "This is a sample item from the API",
    image: "data:image/png;base64,...", // Base64 image string
    link: "https://example.com"
  }
];

// API Endpoint - GET all data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
