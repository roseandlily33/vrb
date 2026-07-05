const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/instagramController");
const auth = require("../middleware/auth");

router.get("/", auth.protect, ctrl.list);
router.post("/", auth.protect, auth.isAdmin, ctrl.create);
router.get("/:id", auth.protect, ctrl.get);
router.put("/:id", auth.protect, auth.isAdmin, ctrl.update);
router.delete("/:id", auth.protect, auth.isAdmin, ctrl.remove);

module.exports = router;
