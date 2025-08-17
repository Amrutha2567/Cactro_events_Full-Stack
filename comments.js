const express = require("express");
const { addComment, replyComment, deleteComment } = require("../controllers/commentController");
const router = express.Router();

router.post("/:videoId", addComment);
router.post("/:videoId/reply/:commentId", replyComment);
router.delete("/:videoId/:commentId", deleteComment);

module.exports = router;
