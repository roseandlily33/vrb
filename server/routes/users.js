const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/userController");
const auth = require("../middleware/auth");

// Admin-only management of users
router.get("/", auth.protect, auth.isAdmin, ctrl.listUsers);
router.post("/", auth.protect, auth.isAdmin, ctrl.createUser);
router.get("/:id", auth.protect, auth.isAdmin, ctrl.getUser);
router.put("/:id", auth.protect, auth.isAdmin, ctrl.updateUser);
router.delete("/:id", auth.protect, auth.isAdmin, ctrl.deleteUser);

module.exports = router;
