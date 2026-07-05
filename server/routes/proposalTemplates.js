const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/proposalTemplateController");
const auth = require("../middleware/auth");

router.get("/", auth.protect, ctrl.listTemplates);
router.post("/", auth.protect, auth.isAdmin, ctrl.createTemplate);
router.get("/:id", auth.protect, ctrl.getTemplate);
router.put("/:id", auth.protect, auth.isAdmin, ctrl.updateTemplate);
router.delete("/:id", auth.protect, auth.isAdmin, ctrl.deleteTemplate);

module.exports = router;
