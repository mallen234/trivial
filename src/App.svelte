<script lang="ts">
  import Answer from "./lib/Answer.svelte";
  import Counter from "./lib/Counter.svelte";
  import Keyboard from "./lib/Keyboard.svelte";
  import { questionBank } from "./api/questions";
  import { setContext } from "svelte";
  import { userGuess } from "./svelte/store";

  setContext("userGuess", {
    userGuess,
  });
</script>

<div class="title" aria-label="Title">
  <h2>Trivial</h2>
</div>
<main class="main">
  <div>
    <p>1 : {questionBank[0].question1}</p>
    <p>2 : {questionBank[0].question2}</p>
    <p>3 : {questionBank[0].question3}</p>
  </div>

  <div>
    <Answer guess={userGuess} />
  </div>

  <Keyboard guess={userGuess} />
</main>

<style>
  .title {
    height: 15vh;
    background-color: white;
    font-size: x-large;
    font-family: "Lobster";
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .main {
    background-color: #d5e8ff;
    background-color: #ffced3;

    /* padding: 0rem 1rem 0rem 1rem; */
    min-width: none;
    font-family: "Sansita", sans-serif;
    font-size: large;
    font-weight: 600;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .answer {
    align-items: center;
  }
</style>
