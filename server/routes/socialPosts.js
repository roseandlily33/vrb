const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/socialMediaController");
const auth = require("../middleware/auth");

router.get("/", auth.protect, ctrl.listPosts);
router.post("/", auth.protect, auth.isAdmin, ctrl.createPost);
router.get("/:id", auth.protect, ctrl.getPost);
router.put("/:id", auth.protect, auth.isAdmin, ctrl.updatePost);
router.delete("/:id", auth.protect, auth.isAdmin, ctrl.deletePost);

module.exports = router;
