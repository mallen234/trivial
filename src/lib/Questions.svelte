<script lang="ts">
  import type { Writable } from "svelte/store";

  export let cluesCount: Writable<number>;
  export let todaysQuestion;

  let cluesCount_value: number;
  cluesCount.subscribe((value) => {
    cluesCount_value = value;
  });

  let question1flipped = false;
  let question2flipped = false;
  let question3flipped = false;

  let question1BackgroundColour: string = "#FFFFFF";
  let question2BackgroundColour: string = "#FFFFFF";
  let question3BackgroundColour: string = "#FFFFFF";

  const handleQuestionOneClick = () => {
    if (question1BackgroundColour != "#FFEE8C") {
      question1BackgroundColour = "#FFEE8C";
      cluesCount.update((value) => value + 1);
    }
  };

  const handleQuestionTwoClick = () => {
    if (question2BackgroundColour != "#FFEE8C") {
      question2BackgroundColour = "#FFEE8C";
      cluesCount.update((value) => value + 1);
    }
  };

  const handleQuestionThreeClick = () => {
    if (question3BackgroundColour != "#FFEE8C") {
      question3BackgroundColour = "#FFEE8C";
      cluesCount.update((value) => value + 1);
    }
  };
</script>

<div class="questions">
  <button
    class="flip-container"
    on:click={() => {
      handleQuestionOneClick();
      question1flipped = !question1flipped;
    }}
  >
    <div
      class="flipper"
      class:flip={question1flipped}
      style="background-color:{question1BackgroundColour}"
    >
      <div class="front">1 : {todaysQuestion.question1}</div>
      <div class="back">1 : {todaysQuestion.answer1}</div>
    </div>
  </button>

  <button
    class="flip-container"
    on:click={() => {
      handleQuestionTwoClick();
      question2flipped = !question2flipped;
    }}
  >
    <div
      class="flipper"
      class:flip={question2flipped}
      style="background-color:{question2BackgroundColour}"
    >
      <div class="front">2 : {todaysQuestion.question2}</div>
      <div class="back">2 : {todaysQuestion.answer2}</div>
    </div>
  </button>

  <button
    class="flip-container"
    on:click={() => {
      handleQuestionThreeClick();
      question3flipped = !question3flipped;
    }}
  >
    <div
      class="flipper"
      class:flip={question3flipped}
      style="background-color:{question3BackgroundColour}"
    >
      <div class="front">3 : {todaysQuestion.question3}</div>
      <div class="back">3 : {todaysQuestion.answer3}</div>
    </div>
  </button>
</div>

<style>
  .question {
    width: 90%;
    border-radius: 3px;
    border-width: 2rem;
    border: black;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-color: black;
    border-width: 4px;
    border-style: solid;
    border-radius: 9999px;
    flex: 1;
    /* font-family: "serif"; */
    font-size: 1.125rem;
    transition: 0.6s;
    transform-style: preserve-3d;
  }
  .questions {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    perspective: 1000px;
  }

  .flip-container {
    background-color: transparent;
  }

  .flipper {
    border-radius: 3px;
    border-width: 2rem;
    border: black;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-color: black;
    border-width: 4px;
    border-style: solid;
    border-radius: 9999px;
    /* height: auto; */
    min-height: 45px;
    width: 450px;
    position: relative;
    transition: 0.6s;
    transform-style: preserve-3d;
  }

  .flip {
    transform: rotateX(180deg);
  }

  .front,
  .back {
    position: absolute;
    min-height: 45px;
    width: 450px;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: black;
  }

  .front {
    background-color: transparent;
  }

  .back {
    background-color: transparent;
    transform: rotateX(180deg);
  }
</style>
