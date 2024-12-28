const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Import player routes
const playerRoutes = require('./routes/PlayerRoutes');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Static file serving for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Routes
app.use('/api/players', playerRoutes);  // Add this to your routes

// MongoDB connection
mongoose.connect('mongodb://localhost/cricketplayersDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});