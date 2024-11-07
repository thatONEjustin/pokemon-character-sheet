<script lang="ts">
  import type { Tab } from "@js/types";
  import type { Snippet } from "svelte"

  type TabsProps = {
    tabs: Array<Tab>;
    sheet_data: any;
    children?: Snippet;
  }


  import SubmitButton from "@components/ui/form/submitButton.svelte";

  import { fly } from "svelte/transition";

  let { tabs, sheet_data, children, active = $bindable(1) }: Tabs = $props();

  function show_tab(index: number):void {
    active = index;

    return;
  }

  function click_next(_event:Event):void {
    // console.log($host())
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
      <section 
        class="tab p-5" 
        in:fly={{ x: "100%", y: 0, delay: 350 }}
        out:fly={{ x: "-100%", y: 0, duration: 250 }} 
      >
        <!-- transition:slide -->
        <Content {sheet_data} />
      </section>
    {/if}
  {/each}

  {#if children}
    {@render children?.()}
  {/if}
</div>

<SubmitButton className="mt-2">
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
