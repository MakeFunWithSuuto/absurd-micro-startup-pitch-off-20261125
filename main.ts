import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A micro-startup where a lazy AI agent naps until board meetings end, then auctions untouched $400 catering trays to interns for a 20% cut, recouping $80 per lunch for offices on zero effort.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
