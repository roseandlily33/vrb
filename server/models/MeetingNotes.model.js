const mongoose = require("mongoose");

const FollowUpSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    dueDate: { type: Date },
    completed: { type: Boolean, default: false },
  },
  { _id: false },
);

const MeetingNotesSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    title: { type: String, required: true },
    date: { type: Date, default: Date.now },
    attendees: [{ type: String }],
    notes: { type: String },
    followUps: [FollowUpSchema],
  },
  { timestamps: true },
);

module.exports = mongoose.model("MeetingNotes", MeetingNotesSchema);
