<script lang="ts">
  import type { Tabs } from "@js/types";
  import type { Snippet } from "svelte"

  type TabsProps = {
    tabs: Array<object>;
    sheet_data: any;
    children?: Snippet;
  }


  import SubmitButton from "@components/ui/form/submitButton.svelte";

  import { slide } from "svelte/transition";

  let { tabs, sheet_data, children }: TabsProps = $props();

  let active = $state(1);

  function show_tab(index: number): undefined {
    active = index;

    return;
  }
</script>

<ul
  class="mb-[-2px] flex items-stretch rounded-md border-2 border-b-black z-20"
>
  {#each tabs as { label, index }}
    <li
      class:active={active === index}
      class="inline-flex rounded-t-md px-5 py-2.5"
    >
      <a
        href={`#${label.toLowerCase().replace(" ", "")}`}
        onclick={() => show_tab(index)}
      >
        {label}
      </a>
    </li>
  {/each}
</ul>

<div class="rounded-b-md border-2 border-dracula overflow-hidden z-10">
  {#each tabs as { content: Content, index }}
    {#if active == index}
      <section class="tab p-5" transition:slide>
        <Content {sheet_data} />
      </section>
    {/if}
  {/each}

  {#if children}
    {@render children?.()}
  {/if}
</div>

<SubmitButton>
  Next
  <i class="nf nf-fa-arrow_right"></i>
</SubmitButton>

<style lang="postcss">
  .active {
    @apply pb-[1px]
      border
      border-dark
      border-b-cullen
      bg-dracula;
  }

  .active a {
    @apply text-nosferatu-900;
  }
</style>
