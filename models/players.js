// models/players.js

const mongoose = require('mongoose');

// Define player schema
const playerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    team: String,
    role: String,
    matches: Number,
    performance: String,
});

// Create the Player model and explicitly specify the collection name
const Player = mongoose.model('Player', playerSchema, 'playersDB');  // 'playersDB' is the collection name

module.exports = Player;  // Export the Player model to be used in routes