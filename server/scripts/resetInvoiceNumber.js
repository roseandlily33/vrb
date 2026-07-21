// Usage:
// node resetInvoiceNumber.js --from=9 --to=4 --counter=5 [--force]
// Defaults: --from required, --to required, --counter optional
require("dotenv").config();
const mongoose = require("mongoose");
const Invoice = require("../models/Invoice.model");
const Counter = require("../models/Counter.model");

function parseArgs() {
  const args = {};
  for (const arg of process.argv.slice(2)) {
    if (arg.startsWith("--")) {
      const [k, v] = arg.slice(2).split("=");
      args[k] = v === undefined ? true : v;
    }
  }
  return args;
}

async function main() {
  const args = parseArgs();
  const from = args.from ? Number(args.from) : NaN;
  const to = args.to ? Number(args.to) : NaN;
  const counterSeq =
    args.counter !== undefined ? Number(args.counter) : undefined;
  const force = !!args.force;

  if (!Number.isFinite(from) || !Number.isFinite(to)) {
    console.error(
      "Usage: node resetInvoiceNumber.js --from=9 --to=4 --counter=5 [--force]",
    );
    process.exit(2);
  }

  const MONGODB_URI =
    process.env.MONGO_URI ||
    process.env.MONGO_URL ||
    "mongodb://localhost:27017/vrb";

  // Mongoose v7+ no longer accepts `useNewUrlParser` / `useUnifiedTopology` options.
  // Simply pass the URI; mongoose will use sensible defaults.
  await mongoose.connect(MONGODB_URI);

  try {
    const existing = await Invoice.findOne({ number: from });
    if (!existing) {
      console.error(`No invoice found with number=${from}`);
      process.exit(3);
    }

    const conflict = await Invoice.findOne({ number: to });
    if (conflict && !force) {
      console.error(
        `Another invoice already has number=${to}. Use --force to overwrite.`,
      );
      process.exit(4);
    }

    if (conflict && force) {
      console.log(`Overwriting invoice _id=${conflict._id} number ${to}`);
      conflict.number = null;
      conflict.invoiceId = null;
      await conflict.save();
    }

    existing.number = to;
    existing.invoiceId = String(to).padStart(4, "0");
    await existing.save();

    console.log(`Updated invoice ${from} -> ${to} (id ${existing._id})`);

    if (counterSeq !== undefined) {
      const counterDoc = await Counter.findByIdAndUpdate(
        "invoice",
        { $set: { seq: counterSeq } },
        { upsert: true, returnDocument: "after" },
      );

      console.log(`Set Counter 'invoice'.seq = ${counterDoc.seq}`);
    }

    console.log("Done.");
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

main();
