<script lang="ts">
  import AnswerInput from "./lib/AnswerInput.svelte";
  import Keyboard from "./lib/Keyboard.svelte";
  import { questionBank } from "./api/questions";
  import { userGuess, isGuessCorrect, cluesCount } from "./svelte/store";
  import Congrats from "./lib/Congrats.svelte";
  import Questions from "./lib/Questions.svelte";
  import Header from "./lib/Header.svelte";
  import HelpScreen from "./lib/HelpScreen.svelte";
  import OpeningScreen from "./lib/OpeningScreen.svelte";

  let isGuessCorrect_value: boolean;
  let showHelp: boolean;
  let showOpeningScreen: boolean = true;
  const todaysQuestion = questionBank[0];
  let cluesCount_value: number;
  isGuessCorrect.subscribe((value) => {
    isGuessCorrect_value = value;
  });
  cluesCount.subscribe((value) => {
    cluesCount_value = value;
  });

  const handleHelpClick = () => {
    showHelp = !showHelp;
  };

  const handleGuess = (guess: string) => {
    if (todaysQuestion.link.includes(guess)) {
      isGuessCorrect.set(true);
    }

    // todaysQuestion.link.forEach((link) => {
    //   console.log({ guess });
    //   console.log(link, guess);
    //   if (link.includes(guess)) {
    //     isGuessCorrect.set(true);
    //   }
    // });
  };
  const handleStartClick = () => {
    showOpeningScreen = false;
  };
</script>

<main>
  {#if showOpeningScreen}
    <OpeningScreen {handleStartClick} />
  {:else}
    <Header {handleHelpClick} />
    {#if showHelp}
      <HelpScreen />
    {:else}
      <div class="main">
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
      </div>
    {/if}
  {/if}
</main>

<style>
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
  .answer {
    align-items: center;
  }
  .keyboard {
    /* display: flex; */
  }
</style>
