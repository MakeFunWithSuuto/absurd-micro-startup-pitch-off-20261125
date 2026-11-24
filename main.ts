import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A $9/month service for HOA dog owners: a lazy AI agent naps on a bark-collar webhook, waking to text the HOA board a $0.01 haiku apology that waives $100 noise fines.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
