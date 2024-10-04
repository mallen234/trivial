<script lang="ts">
  import AnswerInput from "./lib/AnswerInput.svelte";
  import Keyboard from "./lib/Keyboard.svelte";
  import { questionBank } from "./api/questions";
  import { userGuess, isGuessCorrect, cluesCount } from "./svelte/store";
  import Congrats from "./lib/Congrats.svelte";
  import Questions from "./lib/Questions.svelte";

  let isGuessCorrect_value: boolean;
  const todaysQuestion = questionBank[0];
  let cluesCount_value: number;
  isGuessCorrect.subscribe((value) => {
    isGuessCorrect_value = value;
  });
  cluesCount.subscribe((value) => {
    cluesCount_value = value;
  });

  const handleGuess = (guess: string) => {
    todaysQuestion.link.forEach((link) => {
      console.log(link, guess);
      if (link.includes(guess)) {
        isGuessCorrect.set(true);
      }
    });
  };
</script>

<div class="title" aria-label="Title">
  <h2>Trivial</h2>
</div>
<main class="main">
  <Questions {todaysQuestion} {cluesCount} />
  <div>
    <p>Clues used : {cluesCount_value}</p>
  </div>
  {#if isGuessCorrect_value === false}
    <div>
      <AnswerInput guess={userGuess} />
    </div>
    <div class="keyboard">
      <Keyboard guess={userGuess} {handleGuess} />
    </div>
  {:else if isGuessCorrect_value === true}
    <Congrats cluesUsed={cluesCount_value} />
  {/if}
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
    max-width: 500px;
    font-family: "Sansita", sans-serif;
    font-size: large;
    font-weight: 600;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }
</style>
