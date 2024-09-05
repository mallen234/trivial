<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import Keyboard from "./lib/Keyboard.svelte";
</script>

<main class="main">
  <div>
    <h2>Trivial</h2>
  </div>
  <div>
    <ul>
      <li>
        <p>Tube station two down from Cockfosters</p>
      </li>
      <li>
        <p>Swedish multinational networking and telecommunications company</p>
      </li>
      <li>
        <p>Racing car manufacturer</p>
      </li>
    </ul>
  </div>

  <div class="card">
    <input />
  </div>

  <Keyboard />
</main>

<style>
  .main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
