<script lang="ts">
  let i = $state(1);

  function add1() {
    if (i >= 7) i = 7;
    else i++;
  }

  function subtract1() {
    if (i <= 1) i = 1;
    else i--;
  }
</script>

<div>
  <p class="font-bold text-4xl font-serif text-blue-700">About Us</p>
  <p class="text-lg">{i}</p>
  <button onclick={add1}>Add 1</button>
  <button onclick={subtract1}>Subtract 1</button>
</div>