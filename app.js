const express = require("express");
const { getVideoDetails, updateVideoDetails } = require("../controllers/videoController");
const router = express.Router();

router.get("/:videoId", getVideoDetails);
router.put("/:videoId", updateVideoDetails);

module.exports = router;
