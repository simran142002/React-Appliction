const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Define a sample endpoint that returns JSON data
app.get('/api/data', (req, res) => {
  const data = [
    {
        "label": "Week 1",
        "data1": 200,
        "data2": 200
      },
      {
        "label": "Week 2",
        "data1": 200,
        "data2": 200
      },
      {
        "label": "Week 3",
        "data1": 200,
        "data2": 200
      },
      {
        "label": "Week 4",
        "data1": 200,
        "data2": 200
      }
    // Add more data as needed
  ];

  res.json(data);
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
