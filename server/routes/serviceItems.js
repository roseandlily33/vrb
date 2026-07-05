const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/serviceItemController");
const auth = require("../middleware/auth");

router.get("/", auth.protect, ctrl.listItems);
router.post("/", auth.protect, auth.isAdmin, ctrl.createItem);
router.get("/:id", auth.protect, ctrl.getItem);
router.put("/:id", auth.protect, auth.isAdmin, ctrl.updateItem);
router.post("/:id/archive", auth.protect, auth.isAdmin, ctrl.archiveItem);
router.post("/:id/unarchive", auth.protect, auth.isAdmin, ctrl.unarchiveItem);
router.get("/:id/history", auth.protect, auth.isAdmin, ctrl.history);
router.delete("/:id", auth.protect, auth.isAdmin, ctrl.deleteItem);

module.exports = router;
