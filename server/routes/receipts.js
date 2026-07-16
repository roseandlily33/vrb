const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/receiptsController");
const auth = require("../middleware/auth");

router.post("/", auth.protect, ctrl.createReceipt);
router.get("/all", auth.protect, auth.isAdmin, ctrl.getAllReceipts);
router.get("/:id", auth.protect, ctrl.getReceipt);
router.put("/:id", auth.protect, auth.isAdmin, ctrl.updateReceipt);
router.delete("/:id", auth.protect, auth.isAdmin, ctrl.deleteReceipt);
router.get("/", auth.protect, ctrl.listReceipts);

module.exports = router;
