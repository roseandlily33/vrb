require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User.model");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/vrb";

async function main() {
  await mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDB");

  const email = process.env.SEED_ADMIN_EMAIL || "admin@example.com";
  const password = process.env.SEED_ADMIN_PASSWORD || "password";
  const name = process.env.SEED_ADMIN_NAME || "Admin User";

  const existing = await User.findOne({ email });
  if (existing) {
    console.log(`Admin user already exists: ${email}`);
    await mongoose.disconnect();
    return process.exit(0);
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashed,
    role: "admin",
  });
  console.log("Created admin user:", { id: user._id, email: user.email });

  await mongoose.disconnect();
  process.exit(0);
}

main().catch((err) => {
  console.error("Seed error", err);
  process.exit(1);
});
