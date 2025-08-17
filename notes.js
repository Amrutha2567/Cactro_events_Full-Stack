const express = require("express");
const { addNote, getNotes, searchNotes } = require("../controllers/noteController");
const router = express.Router();

router.post("/", addNote);
router.get("/", getNotes);
router.get("/search", searchNotes);

module.exports = router;
