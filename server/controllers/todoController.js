const Todo = require("../models/Todo.model");

exports.createTodo = async (req, res, next) => {
  try {
    // sanitize assignedTo empty string which causes ObjectId cast errors
    if (req.body && req.body.assignedTo === "") delete req.body.assignedTo;
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo });
  } catch (err) {
    next(err);
  }
};

exports.listTodos = async (req, res, next) => {
  try {
    const query = {};
    if (req.query.clientId) query.clientId = req.query.clientId;
    const todos = await Todo.find(query).sort({ createdAt: -1 });
    res.json({ todos });
  } catch (err) {
    next(err);
  }
};

exports.getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Not found" });
    res.json({ todo });
  } catch (err) {
    next(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    // sanitize assignedTo empty string before update
    if (req.body && req.body.assignedTo === "") delete req.body.assignedTo;
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    if (!todo) return res.status(404).json({ error: "Not found" });
    res.json({ todo });
  } catch (err) {
    next(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ error: "Not found" });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
};
