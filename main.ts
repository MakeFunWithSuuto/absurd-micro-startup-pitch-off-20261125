import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A $9/month service for HOA dog owners: a lazy AI agent naps on a bark-collar webhook, waking to text custom haiku apologies and a $5 latte (at cost) before Karen files a noise complaint.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
