<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M", "DEL"];
</script>

<div class="full-keyboard">
  <div class="keyboard">
    {#each { length: firstRow.length } as _, i}
      <button aria-label={firstRow[i]} class="keyboard-element"
        >{firstRow[i]}</button
      >
    {/each}
  </div>

  <div class="keyboard">
    {#each { length: secondRow.length } as _, i}
      <button aria-label={secondRow[i]} class="keyboard-element"
        >{secondRow[i]}</button
      >
    {/each}
  </div>

  <div class="keyboard">
    {#each { length: thirdRow.length } as _, i}
      <button aria-label={thirdRow[i]} class="keyboard-element"
        >{thirdRow[i]}</button
      >
    {/each}
  </div>
</div>

<style>
  .full-keyboard {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
  }
  .keyboard {
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: space-evenly;
    gap: 5px;
    max-width: 100%;
  }
  .keyboard-element {
    font-size: large;
    font-weight: 300;
    height: 2.75rem;
    flex-grow: 1;
    box-sizing: border-box;
    text-align: center;
    border: white;
    background-color: white;
    border-radius: 0.4rem;
    box-shadow: 0 0 3px -1px rgba(0, 0, 0, 0.9);
  }
  .keyboard > button:hover {
    opacity: 0.8;
  }
</style>
