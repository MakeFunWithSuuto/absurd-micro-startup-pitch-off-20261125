import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A $9/month service for HOA dog owners: a lazy AI agent naps on a bark-collar webhook, waking to text the HOA vice president a custom haiku apology for $0.01 before a $100 fine hits.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
