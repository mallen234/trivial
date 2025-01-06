<script lang="ts">
  import { getContext } from "svelte";
  export let guess;
</script>

<input
  class="answer"
  aria-label="Answer Input"
  value={$guess ? $guess : ""}
  placeholder="Enter guess..."
  disabled
/>

<style>
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
  .answer:disabled {
    background-color: white;
    color: black;
    /* border: black; */
  }
</style>
