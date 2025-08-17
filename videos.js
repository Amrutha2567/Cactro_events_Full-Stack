// Placeholder video routes - implement YouTube API calls here using googleapis and stored tokens
const express = require('express');
const router = express.Router();

// GET /api/videos/:videoId
router.get('/:videoId', (req, res) => {
  const videoId = req.params.videoId;
  res.json({ message: 'Fetch video details from YouTube for ' + videoId + ' (implement).' });
});

// PATCH /api/videos/:videoId
router.patch('/:videoId', (req, res) => {
  const videoId = req.params.videoId;
  const { title, description } = req.body;
  res.json({ message: 'Edit video ' + videoId + ' (implement).', title, description });
});

module.exports = router;
