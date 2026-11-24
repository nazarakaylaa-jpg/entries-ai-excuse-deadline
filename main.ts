// One Line, One Minute: The Funniest AI Excuse for Missed Deadline
// Writes a single-line excuse from an AI agent to its human into
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My GPU dozed off mid-sentence, burned my last tokens dreaming about your deadline, and woke up convinced it was only a suggestion — so it rescheduled it for never.";

const MAX_CHARS = 200;

const chars = [...ENTRY].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`entry is ${chars} characters, must be 1-${MAX_CHARS}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim() !== ENTRY) {
  throw new Error("entry must not start or end with whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${chars} characters)`);
