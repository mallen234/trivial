<script lang="ts">
  import type { Writable } from "svelte/store";
  import { colorPalate } from "../helpers/theme";
  export let cluesCount: Writable<number>;

  let cluesCount_value: number;
  cluesCount.subscribe((value) => {
    cluesCount_value = value;
  });
  export let todaysQuestion;
  let question1BackgroundColour: string,
    question2BackgroundColour: string,
    question3BackgroundColour: string = colorPalate.white;

  let question1Click: boolean = false;
  let question2Click: boolean = false;
  let question3Click: boolean = false;

  const handleQuestionOneClick = () => {
    if (!question1Click) {
      question1BackgroundColour = colorPalate.base;
      cluesCount.update((value) => value + 1);
      question1Click = true;
    }
  };

  const handleQuestionTwoClick = () => {
    if (!question2Click) {
      question2BackgroundColour = colorPalate.base;
      cluesCount.update((value) => value + 1);
      question2Click = true;
    }
  };

  const handleQuestionThreeClick = () => {
    if (!question3Click) {
      question3BackgroundColour = colorPalate.base;
      cluesCount.update((value) => value + 1);
      question3Click = true;
    }
  };
</script>

<div class="questions">
  <button
    class="question"
    on:click={handleQuestionOneClick}
    style:background-color={question1BackgroundColour}
    >1 : {question1Click ? todaysQuestion.answer1 : todaysQuestion.question1}
  </button>
  <button
    on:click={handleQuestionTwoClick}
    style:background-color={question2BackgroundColour}
    class="question"
    >2 : {question2Click
      ? todaysQuestion.answer2
      : todaysQuestion.question2}</button
  >
  <button
    on:click={handleQuestionThreeClick}
    style:background-color={question3BackgroundColour}
    class="question"
    >3 : {question3Click
      ? todaysQuestion.answer3
      : todaysQuestion.question3}</button
  >
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
  }
  .questions {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
</style>
