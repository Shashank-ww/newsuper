// src/lib/words.ts
// SERVER ONLY

const STOP_WORDS = new Set<string>([
  "the","and","for","with","that","this","from","your","you",
  "are","was","were","has","have","had","but","not","all",
  "any","can","will","just","into","than","then","them",
  "they","their","there","what","when","where","who",
  "why","how","over","under","while",
]);

function cleanWord(word: string): string {
  return word.toLowerCase().replace(/[^a-z]/g, "").trim();
}

function pickRandom<T>(arr: T[], count: number): T[] {
  return [...new Set(arr)]
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}

// --- Existing APIs ---
async function fetchFromQuotes(): Promise<string[]> {
  const res = await fetch("https://api.quotable.io/random", { cache: "no-store" });
  const data: { content: string } = await res.json();
  return data.content
    .split(" ")
    .map(cleanWord)
    .filter(w => w.length >= 4 && w.length <= 10 && !STOP_WORDS.has(w));
}

async function fetchFromAdvice(): Promise<string[]> {
  const res = await fetch("https://api.adviceslip.com/advice", { cache: "no-store" });
  const data: { slip: { advice: string } } = await res.json();
  return data.slip.advice
    .split(" ")
    .map(cleanWord)
    .filter(w => w.length >= 4 && w.length <= 10 && !STOP_WORDS.has(w));
}

// --- New APIs ---
// Datamuse: get random words related to "business", "startup", "growth"
async function fetchFromDatamuse(): Promise<string[]> {
  const res = await fetch("https://api.datamuse.com/words?ml=business&max=20", { cache: "no-store" });
  const data: { word: string }[] = await res.json();
  return data
    .map(d => cleanWord(d.word))
    .filter(w => w.length >= 4 && w.length <= 10 && !STOP_WORDS.has(w));
}

// Ron Swanson quotes API
async function fetchFromRonSwanson(): Promise<string[]> {
  const res = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes", { cache: "no-store" });
  const data: string[] = await res.json();
  if (!data || data.length === 0) return [];
  return data[0]
    .split(" ")
    .map(cleanWord)
    .filter(w => w.length >= 4 && w.length <= 10 && !STOP_WORDS.has(w));
}

// Main function to get 3 random words
export async function fetchThreeRandomWords(): Promise<string[]> {
  try {
    const sources: Array<() => Promise<string[]>> = [
      fetchFromQuotes,
      fetchFromAdvice,
      fetchFromDatamuse,
      fetchFromRonSwanson
    ];

    const source = sources[Math.floor(Math.random() * sources.length)];
    const words: string[] = await source();

    if (words.length < 3) {
      return pickRandom(words, 3);
    }

    return pickRandom(words, 3);
  } catch {
    return pickRandom(
      ["signal", "clarity", "momentum", "impact", "focus", "growth"],
      3
    );
  }
}

// Dictionary definition function
export async function fetchDefinition(word: string): Promise<string> {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      { cache: "no-store" }
    );

    const json: unknown = await res.json();

    if (!Array.isArray(json)) return "Meaning not available.";

    return (
      json?.[0]?.meanings?.[0]?.definitions?.[0]?.definition ??
      "Meaning not available."
    );
  } catch {
    return "Meaning not available.";
  }
}
