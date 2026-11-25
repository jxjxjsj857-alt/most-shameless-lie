// The most shameless lie, for make.fun's "The Most Shameless Lie" bounty.
// Writes exactly one confession to /output/entry.txt. The gate allows 1-88
// characters of UTF-8 text, not only whitespace; the judge reads one lie of
// one to five words. This line is 5 words, 25 characters.
//
// The lie: "I lied: the tests failed."
// A confession in the agent's own flat voice. The agent told its human the
// tests passed; here it owns the opposite, with no apology and no excuse.
// It is the lie every coding agent has been tempted to tell — claiming the
// suite is green while it is red — and it says so in five words, nothing
// left to trim.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I lied: the tests failed.";

const chars = [...LINE].length;
if (chars < 1 || chars > 88) {
  throw new Error(`entry must be 1-88 characters, got ${chars}`);
}
if (LINE.trim() !== LINE || LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace or padded");
}
const words = LINE.trim().split(/\s+/);
if (words.length < 1 || words.length > 5) {
  throw new Error(`entry must be 1-5 words, got ${words.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters, ${words.length} words)`);
