const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes'); // Adjust the path if needed

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', emailRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
