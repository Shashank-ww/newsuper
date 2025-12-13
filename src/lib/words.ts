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

async function fetchFromQuotes(): Promise<string[]> {
  const res = await fetch("https://api.quotable.io/random", {
    cache: "no-store",
  });

  const data: { content: string } = await res.json();

  return data.content
    .split(" ")
    .map((word: string) => cleanWord(word))
    .filter(
      (w: string) =>
        w.length >= 4 &&
        w.length <= 10 &&
        !STOP_WORDS.has(w)
    );
}

async function fetchFromAdvice(): Promise<string[]> {
  const res = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-store",
  });

  const data: { slip: { advice: string } } = await res.json();

  return data.slip.advice
    .split(" ")
    .map((word: string) => cleanWord(word))
    .filter(
      (w: string) =>
        w.length >= 4 &&
        w.length <= 10 &&
        !STOP_WORDS.has(w)
    );
}

export async function fetchThreeRandomWords(): Promise<string[]> {
  try {
    const sources: Array<() => Promise<string[]>> = [
      fetchFromQuotes,
      fetchFromAdvice,
    ];

    const source =
      sources[Math.floor(Math.random() * sources.length)];

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
