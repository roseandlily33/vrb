const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/proposalController");
const auth = require("../middleware/auth");

router.get("/", auth.protect, ctrl.listProposals);
router.post("/", auth.protect, auth.isAdmin, ctrl.createProposal);
router.get("/:id", auth.protect, ctrl.getProposal);
router.put("/:id", auth.protect, auth.isAdmin, ctrl.updateProposal);
router.delete("/:id", auth.protect, auth.isAdmin, ctrl.deleteProposal);

module.exports = router;
