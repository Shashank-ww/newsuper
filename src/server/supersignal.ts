"use server";

import { fetchThreeRandomWords, fetchDefinition } from "@/lib/words";

export async function generateSupersignal() {
  const words: string[] = await fetchThreeRandomWords();
  const defs: string[] = await Promise.all(
    words.map((w: string) => fetchDefinition(w))
  );

  return {
    words,
    defs,
    phrase: words.join("."),
  };
}
