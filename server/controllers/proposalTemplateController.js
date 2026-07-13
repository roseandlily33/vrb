const Template = require("../models/ProposalTemplate.model");

exports.createTemplate = async (req, res, next) => {
  try {
    const tpl = await Template.create(req.body);
    res.status(201).json({ template: tpl });
  } catch (err) {
    next(err);
  }
};

exports.listTemplates = async (req, res, next) => {
  try {
    const templates = await Template.find().sort({ createdAt: -1 });
    res.json({ templates });
  } catch (err) {
    next(err);
  }
};

exports.getTemplate = async (req, res, next) => {
  try {
    const tpl = await Template.findById(req.params.id);
    if (!tpl) return res.status(404).json({ error: "Not found" });
    res.json({ template: tpl });
  } catch (err) {
    next(err);
  }
};

exports.updateTemplate = async (req, res, next) => {
  try {
    const tpl = await Template.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    if (!tpl) return res.status(404).json({ error: "Not found" });
    res.json({ template: tpl });
  } catch (err) {
    next(err);
  }
};

exports.deleteTemplate = async (req, res, next) => {
  try {
    const tpl = await Template.findByIdAndDelete(req.params.id);
    if (!tpl) return res.status(404).json({ error: "Not found" });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
};
