import type { Writable } from "svelte/store";

export const handleClick = (key: string, guess: Writable<string>) => {
  if (key === "Enter") {
  } else if (key === "\u232B") {
    guess.update((guess: string) => guess.slice(0, -1));
  } else {
    guess.update((v: string) => v + key);
  }
};
