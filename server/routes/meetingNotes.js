const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/meetingNotesController");
const auth = require("../middleware/auth");

router.get("/", auth.protect, ctrl.listMeetings);
router.post("/", auth.protect, auth.isAdmin, ctrl.createMeeting);
router.get("/:id", auth.protect, ctrl.getMeeting);
router.put("/:id", auth.protect, auth.isAdmin, ctrl.updateMeeting);
router.delete("/:id", auth.protect, auth.isAdmin, ctrl.deleteMeeting);

module.exports = router;
