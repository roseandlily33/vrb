const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String },
    // assignedTo refers to a company/client id (companyId)
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
    status: {
      type: String,
      enum: ["todo", "in_progress", "done", "blocked"],
      default: "todo",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    dueDate: { type: Date },
    completedAt: { type: Date },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Todo", TodoSchema);
