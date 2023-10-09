// server.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const apiKey = process.env.API_KEY; // Access the API key

const helmet = require('helmet');
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your trusted origin
    methods: ['GET', 'POST'], // Specify allowed HTTP methods
    allowedHeaders: ['Authorization', 'Content-Type'], // Specify allowed headers
  }));
app.use(helmet());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// server.js
app.get('/api/top-stories/:section', async (req, res) => {
    const section = req.params.section;
    if (!apiKey) {
        return res.status(400).json({ error: 'API key is required' });
      }
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
      );
      const stories = response.data.results;
      res.json(stories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  