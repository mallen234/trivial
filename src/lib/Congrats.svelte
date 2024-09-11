<script lang="ts">
  export let cluesUsed;
</script>

<div class="top">
  <h2>Congrats!</h2>
  <p>
    completed with {cluesUsed} clues used
  </p>
</div>

<style>
  .top {
    height: 100%;
    display: flex;

    flex-direction: column;
    justify-content: center;
  }
  .answer {
    font-weight: 600;
    font-size: large;
    width: 75%;
    height: 2rem;
    /* padding-bottom: 5px; */
    /* color: #aaa; */
    /* border-bottom: 1px solid #eee; */
    border-radius: 5px;
  }
</style>
