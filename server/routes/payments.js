const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/paymentController");
const auth = require("../middleware/auth");

router.get("/", auth.protect, ctrl.listPayments);
router.post("/", auth.protect, auth.isAdmin, ctrl.createPayment);
router.get("/all", auth.protect, auth.isAdmin, ctrl.getAllPayments);
router.get("/:id", auth.protect, ctrl.getPayment);
router.put("/:id", auth.protect, auth.isAdmin, ctrl.updatePayment);
router.delete("/:id", auth.protect, auth.isAdmin, ctrl.deletePayment);
module.exports = router;
