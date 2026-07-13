const MeetingNotes = require("../models/MeetingNotes.model");

exports.createMeeting = async (req, res, next) => {
  try {
    const m = await MeetingNotes.create(req.body);
    res.status(201).json({ meeting: m });
  } catch (err) {
    next(err);
  }
};

exports.listMeetings = async (req, res, next) => {
  try {
    const query = {};
    if (req.query.clientId) query.clientId = req.query.clientId;
    const meetings = await MeetingNotes.find(query).sort({ date: -1 });
    res.json({ meetings });
  } catch (err) {
    next(err);
  }
};

exports.getMeeting = async (req, res, next) => {
  try {
    const meeting = await MeetingNotes.findById(req.params.id);
    if (!meeting) return res.status(404).json({ error: "Not found" });
    res.json({ meeting });
  } catch (err) {
    next(err);
  }
};

exports.updateMeeting = async (req, res, next) => {
  try {
    const meeting = await MeetingNotes.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" },
    );
    if (!meeting) return res.status(404).json({ error: "Not found" });
    res.json({ meeting });
  } catch (err) {
    next(err);
  }
};

exports.deleteMeeting = async (req, res, next) => {
  try {
    const meeting = await MeetingNotes.findByIdAndDelete(req.params.id);
    if (!meeting) return res.status(404).json({ error: "Not found" });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
};
