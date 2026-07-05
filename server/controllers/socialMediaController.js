const SocialMediaPost = require("../models/SocialMediaPost.model");
const Todo = require("../models/Todo.model");

function sameDay(a, b) {
  if (!a || !b) return false;
  const da = new Date(a);
  const db = new Date(b);
  return (
    da.getFullYear() === db.getFullYear() &&
    da.getMonth() === db.getMonth() &&
    da.getDate() === db.getDate()
  );
}

exports.createPost = async (req, res, next) => {
  try {
    const { title, caption, scheduledAt, tag, clientName, clientId, status } =
      req.body;
    if (!title || !scheduledAt)
      return res.status(400).json({ error: "title and scheduledAt required" });

    const post = await SocialMediaPost.create({
      title,
      caption,
      scheduledAt,
      tag,
      clientName,
      clientId,
      status: status || "scheduled",
      createdBy: req.user?._id,
    });

    // if scheduled for today and clientId provided, create a Todo
    if (clientId && sameDay(scheduledAt, new Date())) {
      // avoid creating duplicate todos for same post (by title + dueDate + client)
      const exists = await Todo.findOne({
        clientId,
        title: `Social: ${title}`,
        dueDate: {
          $gte: new Date(new Date(scheduledAt).setHours(0, 0, 0, 0)),
          $lt: new Date(new Date(scheduledAt).setHours(23, 59, 59, 999)),
        },
      });
      if (!exists) {
        await Todo.create({
          clientId,
          title: `Social: ${title}`,
          description: caption,
          assignedTo: clientId,
          priority: "high",
          dueDate: scheduledAt,
        });
      }
    }

    res.status(201).json({ post });
  } catch (err) {
    next(err);
  }
};

exports.listPosts = async (req, res, next) => {
  try {
    const q = {};
    if (req.query.clientId) q.clientId = req.query.clientId;
    const posts = await SocialMediaPost.find(q)
      .sort({ scheduledAt: 1, createdAt: -1 })
      .limit(500);
    res.json({ posts });
  } catch (err) {
    next(err);
  }
};

exports.getPost = async (req, res, next) => {
  try {
    const post = await SocialMediaPost.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Not found" });
    res.json({ post });
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const {
      title,
      caption,
      scheduledAt,
      tag,
      clientName,
      clientId,
      status,
      postedAt,
    } = req.body;
    const updated = await SocialMediaPost.findByIdAndUpdate(
      req.params.id,
      {
        title,
        caption,
        scheduledAt,
        tag,
        clientName,
        clientId,
        status,
        postedAt,
      },
      { new: true },
    );
    if (!updated) return res.status(404).json({ error: "Not found" });

    // if scheduled for today and clientId provided, create a todo if none exists
    if (clientId && sameDay(scheduledAt, new Date())) {
      const exists = await Todo.findOne({
        clientId,
        title: `Social: ${title}`,
        dueDate: {
          $gte: new Date(new Date(scheduledAt).setHours(0, 0, 0, 0)),
          $lt: new Date(new Date(scheduledAt).setHours(23, 59, 59, 999)),
        },
      });
      if (!exists) {
        await Todo.create({
          clientId,
          title: `Social: ${title}`,
          description: caption,
          assignedTo: clientId,
          priority: "high",
          dueDate: scheduledAt,
        });
      }
    }

    // if post marked as posted, mark corresponding todo done
    if (status === "posted" && clientId) {
      const todo = await Todo.findOne({
        clientId,
        title: `Social: ${title}`,
        dueDate: {
          $gte: new Date(new Date(scheduledAt).setHours(0, 0, 0, 0)),
          $lt: new Date(new Date(scheduledAt).setHours(23, 59, 59, 999)),
        },
      });
      if (todo) {
        todo.status = "done";
        todo.completedAt = postedAt ? new Date(postedAt) : new Date();
        await todo.save();
      }
    }

    res.json({ post: updated });
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const p = await SocialMediaPost.findByIdAndDelete(req.params.id);
    if (!p) return res.status(404).json({ error: "Not found" });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
};
