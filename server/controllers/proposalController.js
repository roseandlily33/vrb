const Proposal = require("../models/Proposal.model");

exports.createProposal = async (req, res, next) => {
  try {
    const p = await Proposal.create(req.body);
    res.status(201).json({ proposal: p });
  } catch (err) {
    next(err);
  }
};

exports.listProposals = async (req, res, next) => {
  try {
    const query = {};
    if (req.query.clientId) query.clientId = req.query.clientId;
    const list = await Proposal.find(query).sort({ createdAt: -1 });
    res.json({ proposals: list });
  } catch (err) {
    next(err);
  }
};

exports.getProposal = async (req, res, next) => {
  try {
    const p = await Proposal.findById(req.params.id);
    if (!p) return res.status(404).json({ error: "Not found" });
    res.json({ proposal: p });
  } catch (err) {
    next(err);
  }
};

exports.updateProposal = async (req, res, next) => {
  try {
    const p = await Proposal.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    if (!p) return res.status(404).json({ error: "Not found" });
    res.json({ proposal: p });
  } catch (err) {
    next(err);
  }
};

exports.deleteProposal = async (req, res, next) => {
  try {
    const p = await Proposal.findByIdAndDelete(req.params.id);
    if (!p) return res.status(404).json({ error: "Not found" });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
};
