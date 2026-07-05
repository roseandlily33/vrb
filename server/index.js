require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Connect to database
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/clients", require("./routes/clients"));
app.use("/api/proposals", require("./routes/proposals"));
app.use("/api/proposal-templates", require("./routes/proposalTemplates"));
app.use("/api/service-items", require("./routes/serviceItems"));
app.use("/api/users", require("./routes/users"));
app.use("/api/todos", require("./routes/todos"));
app.use("/api/payments", require("./routes/payments"));
app.use("/api/meeting-notes", require("./routes/meetingNotes"));

// Health check
app.get("/health", (req, res) => res.json({ ok: true }));

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
