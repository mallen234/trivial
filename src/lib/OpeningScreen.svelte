<script lang="ts">
  export let handleStartClick;
</script>

<div class="opening" aria-label="opening screen">
  <h2>Welcome to</h2>
  <h1>Trivial</h1>

  <button class="begin-playing" on:click={handleStartClick}> Begin</button>

  <p>
    Every day there will be a series of questions which have a link.<br />
    Find the Link to win!
  </p>

  <p>Get a clue on hints by clicking</p>
</div>

<style>
  .opening {
    min-width: none;
    max-width: 500px;
    font-family: "Lobster";

    background-color: #d5e8ff;
    background-color: #ffced3;

    /* padding: 0rem 1rem 0rem 1rem; */
    min-width: none;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    margin: auto;
    height: 80vh;
  }
  .begin-playing {
    background-color: white;
    border: 3px solid black;
    border-radius: 20px;
    width: 250px;
    height: 100px;
    font-size: xx-large;
  }
</style>
