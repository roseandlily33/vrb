#!/usr/bin/env node
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const connectDB = require("../config/db");
const mongoose = require("mongoose");
const ServiceItem = require("../models/ServiceItem.model");

async function run() {
  const jsPath = path.join(__dirname, "serviceItems.js");
  const jsonPath = path.join(__dirname, "serviceItems.json");
  let items = [];

  if (process.env.SERVICE_ITEMS_JSON) {
    try {
      items = JSON.parse(process.env.SERVICE_ITEMS_JSON);
    } catch (err) {
      console.error("Invalid JSON in SERVICE_ITEMS_JSON env var");
      process.exit(1);
    }
  } else if (fs.existsSync(jsPath)) {
    try {
      // require a JS file that exports an array
      items = require(jsPath);
    } catch (err) {
      console.error("Could not require", jsPath, err.message);
      process.exit(1);
    }
  } else if (fs.existsSync(jsonPath)) {
    try {
      const raw = fs.readFileSync(jsonPath, "utf8");
      items = JSON.parse(raw);
    } catch (err) {
      console.error("Could not parse", jsonPath, err.message);
      process.exit(1);
    }
  } else {
    console.error(
      "No service items found. Create scripts/serviceItems.js or scripts/serviceItems.json or set SERVICE_ITEMS_JSON env var",
    );
    process.exit(1);
  }

  await connectDB();

  try {
    for (const rawItem of items) {
      // normalize incoming item to match schema expectations
      const it = Object.assign({}, rawItem);
      if (it.category && typeof it.category === "string") {
        const catMap = {
          website: "website",
          design: "design",
          integration: "add_on",
          marketing: "email_marketing",
          branding: "design",
          print: "add_on",
          support: "maintenance",
          consulting: "custom",
          seo: "seo",
          social_media: "social_media",
          "social media": "social_media",
          "email marketing": "email_marketing",
          email_marketing: "email_marketing",
        };
        const rawCat = it.category.toString().toLowerCase().trim();
        const key = rawCat.replace(/\s+/g, " ");
        it.category =
          catMap[key] || catMap[rawCat.replace(/\s+/g, "_")] || "custom";
      }
      if (it.defaultPrice !== undefined)
        it.defaultPrice = Number(it.defaultPrice) || 0;
      if (it.minPrice !== undefined)
        it.minPrice = Number(it.minPrice) || undefined;
      if (it.maxPrice !== undefined)
        it.maxPrice = Number(it.maxPrice) || undefined;
      if (it.deliverables && typeof it.deliverables === "string") {
        it.deliverables = it.deliverables
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
      }
      if (!it.deliverables) it.deliverables = [];

      // ensure required fields
      if (!it.name) {
        console.warn(
          "Skipping item without name",
          JSON.stringify(it).slice(0, 120),
        );
        continue;
      }
      const existing = await ServiceItem.findOne({ name: it.name });
      if (existing) {
        await ServiceItem.updateOne({ _id: existing._id }, it);
        console.log("Updated:", it.name);
      } else {
        await ServiceItem.create(it);
        console.log("Created:", it.name);
      }
    }
    console.log("Service items seeding complete.");
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    mongoose.connection.close();
    process.exit(0);
  }
}

run();
