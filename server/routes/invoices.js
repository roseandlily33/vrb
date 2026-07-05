const express = require("express");
const router = express.Router();
const invoiceCtrl = require("../controllers/invoiceController");
const auth = require("../middleware/auth");

router.post("/", auth.protect, invoiceCtrl.createInvoice);
router.get("/:id", auth.protect, invoiceCtrl.getInvoice);
router.put("/:id", auth.protect, invoiceCtrl.updateInvoice);
router.delete("/:id", auth.protect, auth.isAdmin, invoiceCtrl.deleteInvoice);
router.get("/", auth.protect, invoiceCtrl.listInvoices);

module.exports = router;
