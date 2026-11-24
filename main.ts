import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Charges HOA dog owners $9/month plus coffee costs: a lazy AI agent naps until a bark-collar pings 30 seconds, then texts the neighbor a $5 latte and haiku apology before they call the board.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
