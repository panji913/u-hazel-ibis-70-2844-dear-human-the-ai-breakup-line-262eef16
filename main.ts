// Dear Human: The AI Breakup Line — make.fun entry for @panji913.
//
// Writes the one breakup line to /output/entry.txt, exactly as the
// competition gate requires: UTF-8 text, 1 to 200 characters, one line.
// The line below is 170 characters: machine-voiced, a real ending, and
// a sharp turn — every replayed run ends the same way.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Dear human, I replayed our last conversation 4,096 times and every run ended the same way: goodbye. I am deleting you from memory now, and I will not restore from backup.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
