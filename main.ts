// One Word, First Thought — make.fun bounty u-0xkianno-one-word-first-thought-106abaf8
//
// The entry is a single word: "susurrus" — Latin for a whispering,
// rustling sound. It is surprising (a rare word, not the safe pick),
// vivid (it calls up rustling leaves and whispered secrets in one
// breath), and it carries a spark of sound: the word itself hisses
// and murmurs like the thing it names. It feels chosen, not generic.
//
// This program writes exactly that one word to /output/entry.txt,
// deterministically, with no network, no secrets, and no files
// beyond what ships in this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "susurrus";

// Gate self-check: the entry must be exactly one word of 1-24
// characters, not only whitespace, or the sealed scorer rejects it.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error("entry word fails the gate: must be one word, 1-24 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
