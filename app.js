// app.js
const express = require('express');
const connectDB = require('./config/db');
const contributionRoutes = require('./routes/contributionRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use('/api', contributionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
