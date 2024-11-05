<script>
  import { slide } from "svelte/transition";

  // const { containerClass } = $$restProps;
  let { containerClass, collapsed = false } = $props();

  // let collapsed = ($$restProps.collapsed) ? $$restProps.collapsed : false

  function showHide() {
    collapsed = !collapsed;
  }
</script>

<div class={containerClass}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="flex flex-row justify-between cursor-pointer" on:click={showHide}>
    <slot name="title">
      <h4>Default</h4>
    </slot>

    <slot name="openIndicator">
      <div>
        {#if collapsed}
          +
        {:else}
          -
        {/if}
      </div>
    </slot>
  </div>

  {#if !collapsed}
    <div class="accordion" transition:slide>
      <slot name="content">Default Content</slot>
    </div>
  {/if}
</div>

<style lang="postcss">
  .accordion {
    @apply flex
      flex-col;
  }
</style>

