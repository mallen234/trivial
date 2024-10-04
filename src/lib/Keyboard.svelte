<script lang="ts">
  import { onMount } from "svelte";
  export let guess: Writable<string>;
  export let handleGuess: (guess: string) => void;
  import { firstRow, secondRow, thirdRow } from "../helpers/helperConsts";
  import type { Writable } from "svelte/store";

  let guess_value: string;
  guess.subscribe((value) => {
    guess_value = value;
  });
  const letterList =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM ".split("");

  const handleKeypress = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    if (key === "Enter" || key === "ENTER") {
      handleGuess(guess_value);
    } else if (key === "del" || key === "BACKSPACE") {
      guess.update((guess: string) => guess.slice(0, -1));
    } else if (letterList.includes(key)) {
      guess.update((v: string) => v + key.toLowerCase());
    }
  };
  const handleClick = (key: string) => {
    if (key === "Enter") {
      handleGuess(guess_value);
    } else if (key === "\u232B") {
      guess.update((guess: string) => guess.slice(0, -1));
    } else {
      guess.update((v: string) => v + key);
    }
  };
  onMount(() => {
    document.addEventListener("keydown", handleKeypress);
  });
</script>

<div class="full-keyboard">
  <div class="keyboard">
    {#each { length: firstRow.length } as _, i}
      <button
        on:click={() => handleClick(firstRow[i])}
        aria-label={firstRow[i]}
        class="keyboard-element">{firstRow[i]}</button
      >
    {/each}
  </div>

  <div class="keyboard">
    {#each { length: secondRow.length } as _, i}
      <button
        on:click={() => handleClick(secondRow[i])}
        aria-label={secondRow[i]}
        class="keyboard-element">{secondRow[i]}</button
      >
    {/each}
  </div>

  <div class="keyboard">
    {#each { length: thirdRow.length } as _, i}
      <button
        on:click={() => handleClick(thirdRow[i])}
        aria-label={thirdRow[i]}
        class="keyboard-element">{thirdRow[i]}</button
      >
    {/each}
  </div>
  <div class="keyboard">
    <button
      on:click={() => handleClick("Enter")}
      aria-label={"Enter"}
      class="enter"
      >Enter
    </button>
    <button
      on:click={() => handleClick(" ")}
      aria-label={"space"}
      class="space-key"
    >
    </button>
    <button
      on:click={() => handleClick("\u232B")}
      aria-label={"backspace"}
      class="backspace"
      >⌫
    </button>
  </div>
</div>

<style>
  .full-keyboard {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    max-width: 500px;
  }
  .keyboard {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 5px;
  }
  .keyboard-element,
  .space-key,
  .enter,
  .backspace {
    font-size: large;
    font-weight: 400;
    height: 2.75rem;
    flex-grow: 1;
    box-sizing: border-box;
    text-align: center;
    border: white;
    background-color: white;
    border-radius: 0.4rem;
    box-shadow: 0 0 3px -1px rgba(0, 0, 0, 0.6);
    border-bottom: 1px solid #eee;
  }
  .keyboard > button:hover {
    opacity: 0.8;
  }

  .space-key {
    width: 80%;
  }
  .backspace {
    width: 20%;
  }
  .enter {
    width: 25%;
  }
</style>
