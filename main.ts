import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A $9/month micro-startup where a lazy AI agent sleeps until a dog's smart-collar logs 30 seconds of barking, then texts the neighbor a $5 coffee card and an apology before they call the HOA.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
