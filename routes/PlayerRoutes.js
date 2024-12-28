// routes/playerRoutes.js

const multer = require('multer');
const path = require('path');
const express = require('express');
const router = express.Router();

// Setup multer for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/'); // Save images in the "uploads" folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});

const upload = multer({ storage: storage });

// Player Model (for reference)
const Player = require('../models/players');

// Add player route with image upload
router.post('/add', upload.single('playerImage'), async (req, res) => {
    try {
        const playerData = req.body;
        if (req.file) {
            playerData.image = req.file.filename; // Save the uploaded image name
        }

        const newPlayer = new Player(playerData);
        await newPlayer.save();

        res.json({ message: 'Player added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error adding player' });
    }
});

// Fetch all players route
router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching players' });
    }
});
// Delete player by ID route
router.delete('/:id', async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);
        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }
        res.json({ message: 'Player deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting player' });
    }
});


// Delete player by ID route
router.delete('/:id', async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);
        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }
        res.json({ message: 'Player deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting player' });
    }
});

module.exports = router;