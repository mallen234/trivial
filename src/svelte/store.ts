import { writable } from "svelte/store";

export const userGuess = writable<string>("");
export const isGuessCorrect = writable<boolean>(false);
export const cluesCount = writable<number>(0);
