const ServiceItem = require("../models/ServiceItem.model");
const ServiceItemHistory = require("../models/ServiceItemHistory.model");

function computeChanges(before = {}, after = {}) {
  const keys = new Set([
    ...Object.keys(before || {}),
    ...Object.keys(after || {}),
  ]);
  const changes = {};
  keys.forEach((k) => {
    const b = before[k];
    const a = after[k];
    try {
      if (JSON.stringify(b) !== JSON.stringify(a)) {
        changes[k] = { before: b, after: a };
      }
    } catch (e) {
      if (b !== a) changes[k] = { before: b, after: a };
    }
  });
  return changes;
}

exports.createItem = async (req, res, next) => {
  try {
    const item = await ServiceItem.create(req.body);
    // record history
    await ServiceItemHistory.create({
      serviceItemId: item._id,
      action: "create",
      userId: req.user && req.user._id,
      after: item.toObject(),
    });
    res.status(201).json({ item });
  } catch (err) {
    next(err);
  }
};

exports.listItems = async (req, res, next) => {
  try {
    const includeArchived = req.query.includeArchived === "true";
    const filter = includeArchived ? {} : { archived: { $ne: true } };
    const items = await ServiceItem.find(filter).sort({ createdAt: -1 });
    res.json({ items });
  } catch (err) {
    next(err);
  }
};

exports.getItem = async (req, res, next) => {
  try {
    const item = await ServiceItem.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json({ item });
  } catch (err) {
    next(err);
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    const before = await ServiceItem.findById(req.params.id).lean();
    if (!before) return res.status(404).json({ error: "Not found" });
    const updated = await ServiceItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" },
    );
    const changes = computeChanges(before, updated.toObject());
    await ServiceItemHistory.create({
      serviceItemId: updated._id,
      action: "update",
      userId: req.user && req.user._id,
      before,
      after: updated.toObject(),
      changes,
    });
    res.json({ item: updated });
  } catch (err) {
    next(err);
  }
};

exports.archiveItem = async (req, res, next) => {
  try {
    const before = await ServiceItem.findById(req.params.id).lean();
    if (!before) return res.status(404).json({ error: "Not found" });
    const updated = await ServiceItem.findByIdAndUpdate(
      req.params.id,
      {
        archived: true,
        archivedAt: new Date(),
        archivedBy: req.user && req.user._id,
      },
      { returnDocument: "after" },
    );
    const changes = computeChanges(before, updated.toObject());
    await ServiceItemHistory.create({
      serviceItemId: updated._id,
      action: "archive",
      userId: req.user && req.user._id,
      before,
      after: updated.toObject(),
      changes,
    });
    res.json({ ok: true, item: updated });
  } catch (err) {
    next(err);
  }
};

exports.unarchiveItem = async (req, res, next) => {
  try {
    const before = await ServiceItem.findById(req.params.id).lean();
    if (!before) return res.status(404).json({ error: "Not found" });
    const updated = await ServiceItem.findByIdAndUpdate(
      req.params.id,
      { archived: false, archivedAt: null, archivedBy: null },
      { returnDocument: "after" },
    );
    const changes = computeChanges(before, updated.toObject());
    await ServiceItemHistory.create({
      serviceItemId: updated._id,
      action: "unarchive",
      userId: req.user && req.user._id,
      before,
      after: updated.toObject(),
      changes,
    });
    res.json({ ok: true, item: updated });
  } catch (err) {
    next(err);
  }
};

exports.history = async (req, res, next) => {
  try {
    const entries = await ServiceItemHistory.find({
      serviceItemId: req.params.id,
    })
      .sort({ createdAt: -1 })
      .lean();
    res.json({ history: entries });
  } catch (err) {
    next(err);
  }
};

// alias delete to archive for safety
exports.deleteItem = async (req, res, next) => {
  return exports.archiveItem(req, res, next);
};
