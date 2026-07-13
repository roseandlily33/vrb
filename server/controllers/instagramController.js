const InstagramPost = require("../models/InstagramPost.model");

exports.create = async (req, res, next) => {
  try {
    const { title, description, tag } = req.body;
    if (!title) return res.status(400).json({ error: "title required" });
    const item = await InstagramPost.create({
      title,
      description,
      tag,
      createdBy: req.user?._id,
    });
    res.status(201).json({ item });
  } catch (err) {
    next(err);
  }
};

exports.list = async (req, res, next) => {
  try {
    const q = {};
    if (req.query.tag) q.tag = req.query.tag;
    if (req.query.done === "true") q.done = true;
    if (req.query.done === "false") q.done = false;
    const items = await InstagramPost.find(q)
      .sort({ createdAt: -1 })
      .limit(1000);
    res.json({ items });
  } catch (err) {
    next(err);
  }
};

exports.get = async (req, res, next) => {
  try {
    const it = await InstagramPost.findById(req.params.id);
    if (!it) return res.status(404).json({ error: "Not found" });
    res.json({ item: it });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { title, description, tag, done } = req.body;
    const update = { title, description, tag };
    if (typeof done !== "undefined") {
      update.done = done;
      update.doneAt = done ? new Date() : null;
    }
    const it = await InstagramPost.findByIdAndUpdate(req.params.id, update, {
      returnDocument: "after",
    });
    if (!it) return res.status(404).json({ error: "Not found" });
    res.json({ item: it });
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const it = await InstagramPost.findByIdAndDelete(req.params.id);
    if (!it) return res.status(404).json({ error: "Not found" });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
};
