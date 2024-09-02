<script lang="ts">
  import Counter from "./lib/Counter.svelte";
</script>

<main>
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
    <Counter />
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
