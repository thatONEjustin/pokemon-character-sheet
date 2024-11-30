<script lang="ts">
  import type { Snippet } from "svelte";

  interface SubmitButtonType {
    name?: string;
    id?: string;
    className?: string;
    children?: Snippet;
    onclick?: any;
  }

  let {
    name = "submit_next",
    id = "submit_next",
    className = "",
    children,
  }: SubmitButtonType = $props();
</script>

<div class={`${className} Submit`}>
  <button type="submit" {name} {id}>
    {#if children}
      {@render children()}
    {:else}
      <strong>Submit</strong>
    {/if}
  </button>
</div>
