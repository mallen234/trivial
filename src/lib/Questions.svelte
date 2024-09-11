<script lang="ts">
  import type { Writable } from "svelte/store";

  export let cluesCount: Writable<number>;

  let cluesCount_value: number;
  cluesCount.subscribe((value) => {
    cluesCount_value = value;
  });
  export let todaysQuestion;
  let question1BackgroundColour: string,
    question2BackgroundColour: string,
    question3BackgroundColour: string = "#FFFFFF";

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
    class="question"
    on:click={handleQuestionOneClick}
    style:background-color={question1BackgroundColour}
    >1 : {todaysQuestion.question1}
  </button>
  <button
    on:click={handleQuestionTwoClick}
    style:background-color={question2BackgroundColour}
    class="question">2 : {todaysQuestion.question2}</button
  >
  <button
    on:click={handleQuestionThreeClick}
    style:background-color={question3BackgroundColour}
    class="question">3 : {todaysQuestion.question3}</button
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
