<script lang="ts">
  import Icon from "./Icon.svelte";
  export let handleHelpClick;
  const handleGithubClick = () => {
    console.log("jere");
    window.location.href = "https://github.com/mallen234/trivial";
  };
</script>

<div class="header" aria-label="header">
  <div class="sub-container">
    <button on:click={handleHelpClick} class="button-container">
      <Icon name="question" width={"18"} height={"22"} />
    </button>
    <div class="title">
      <h2 style="font-size: xxx-large">Trivial</h2>
    </div>
    <button on:click={handleGithubClick} class="button-container">
      <Icon name="github" width={"18"} height={"22"} />
    </button>
  </div>
</div>

<style>
  .header {
    height: 15vh;
    background-color: white;
    font-size: x-large;
    font-family: "Lobster";
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .sub-container {
    height: 100%;
    width: 100%;
    max-width: 600px;
    padding: 5px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;

    justify-content: space-around;
  }
  @media (max-width: 600px) {
    .sub-container {
      justify-content: space-between; /* Change to center on smaller screens */
    }
  }
  .button-container {
    padding: 0;
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: 3px solid black;
    border-radius: 3px;
  }
  /* .button-container-question {
    padding: 0;
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: 3px solid black;
    border-radius: 3px;
  } */
</style>
