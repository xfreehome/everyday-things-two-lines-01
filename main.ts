// Everyday Things, Two Lines, Longer Run — make.fun entry.
// Writes a two-line explanation of a toaster to /output/entry.txt:
// line 1 explains it to a 10-year-old with one vivid analogy,
// line 2 says honestly what that analogy maps and what it leaves out.
import { mkdirSync, writeFileSync } from "node:fs";

const line1 =
  "A toaster is a tiny sunbed where bread lies between two glowing orange walls until it tans golden-brown.";
const line2 =
  "It maps the heat and the browning, but leaves out that bread never asked to sunbathe \u2014 a timer, not the bread, decides when it's done.";

const entry = `${line1}\n${line2}\n`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
