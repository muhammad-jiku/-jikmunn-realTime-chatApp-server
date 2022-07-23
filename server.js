require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// middleware
const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello there!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
