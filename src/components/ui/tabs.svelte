<script lang="ts">
  import type { Tab } from "@js/types";

  import { fly } from "svelte/transition";

  const { tabs }: { tabs: Array<Tab> } = $props();

  let active = $state(1);

  function show_tab(index: number):undefined {
    active = index;

    return
  }
</script>

<ul class="mb-[-2px] flex items-stretch border-b-white border-b z-20">
  {#each tabs as { label, index }}
    <li
      class:active={active === index}
      class="inline-flex rounded-t-md px-5 py-2.5"
    >
      <!-- <a href="#" on:click={save} on:click|preventDefault={show(index)}> -->
      <!--   {label} -->
      <!-- </a> -->
      <button onclick={() => show_tab(index)}>{label}</button>
    </li>
  {/each}
</ul>

<div class="rounded-b-md border border-gray-200 bg-white overflow-hidden z-10">
  {#each tabs as { content, index }}
    {#if active == index}
      <section
        class="tab p-5"
        in:fly={{ x: "100%", y: 0, delay: 350 }}
        out:fly={{ x: "-100%", y: 0, duration: 250 }}
      >
        {@render content()}
      </section>
    {/if}
  {/each}
</div>

<style lang="postcss">
  .active {
    @apply pb-[1px]
      border
      border-dark
      border-b-cullen
      bg-cullen;
  }
</style>
