const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;
    if (!token) return res.status(401).json({ error: "Not authorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "dev_secret");
    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch (err) {
    return res.status(401).json({ error: "Not authorized" });
  }
};

exports.requireRole = (role) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ error: "Not authorized" });
  if (req.user.role !== role)
    return res.status(403).json({ error: "Forbidden" });
  next();
};

exports.isAdmin = (req, res, next) => {
  if (!req.user) return res.status(401).json({ error: "Not authorized" });
  if (req.user.role !== "admin")
    return res.status(403).json({ error: "Forbidden" });
  next();
};
