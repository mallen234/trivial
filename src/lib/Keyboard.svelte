<script lang="ts">
  import { onMount } from "svelte";
  export let guess;
  import { firstRow, secondRow, thirdRow } from "../helpers/helperConsts";
  const takeGuess = () => {};

  const handleKeypress = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    if (key === "Enter" || key === "ENTER") {
      takeGuess();
    } else if (key === "del" || key === "BACKSPACE") {
      guess.update((guess: string) => guess.slice(0, -1));
    } else {
      guess.update((v: string) => v + key);
    }
  };
  const handleClick = (key: string) => {
    if (key === "Enter") {
      takeGuess();
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
</div>

<style>
  .full-keyboard {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
  }
  .keyboard {
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: space-evenly;
    gap: 5px;
    max-width: 100%;
  }
  .keyboard-element {
    font-size: large;
    font-weight: 400;
    height: 2.75rem;
    flex-grow: 1;
    box-sizing: border-box;
    text-align: center;
    border: white;
    background-color: white;
    border-radius: 0.4rem;
    /* box-shadow: 0 0 3px -1px rgba(0, 0, 0, 0.9); */
    border-bottom: 1px solid #eee;
  }
  .keyboard > button:hover {
    opacity: 0.8;
  }
</style>
