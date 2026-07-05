const express = require("express");
const router = express.Router();
const clientCtrl = require("../controllers/clientController");
const auth = require("../middleware/auth");

router.get("/", auth.protect, clientCtrl.listClients);
router.post("/", auth.protect, auth.isAdmin, clientCtrl.createClient);
router.get("/:id", auth.protect, clientCtrl.getClient);
router.put("/:id", auth.protect, auth.isAdmin, clientCtrl.updateClient);
router.delete("/:id", auth.protect, auth.isAdmin, clientCtrl.deleteClient);

module.exports = router;
