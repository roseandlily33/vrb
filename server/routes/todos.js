const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/todoController");
const auth = require("../middleware/auth");

router.get("/", auth.protect, ctrl.listTodos);
router.post("/", auth.protect, auth.isAdmin, ctrl.createTodo);
router.get("/:id", auth.protect, ctrl.getTodo);
router.put("/:id", auth.protect, auth.isAdmin, ctrl.updateTodo);
router.delete("/:id", auth.protect, auth.isAdmin, ctrl.deleteTodo);

module.exports = router;
