<script lang="ts">
  import type { Snippet } from "svelte";

  interface SubmitButtonType {
    name?: string,
    id?: string,
    className?: string
    children?: Snippet
    onclick?: any
  }

  let {
    name = "submit_next",
    id = "submit_next",
    className = "",
    children
  }:SubmitButtonType  = $props();
</script>

<div class={className}>
  <button type="submit" {name} {id}>
    {#if children}
      {@render children()}
    {:else}
      <strong>Submit</strong>
    {/if}
  </button>
</div>

<style lang="postcss">
  button {
    @apply border
      bg-green-700
      border-green-700
      rounded-md
      px-3
      py-2;

    &:hover {
      @apply bg-green-900 text-light;
    }
  }
</style>

