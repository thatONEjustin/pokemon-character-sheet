<script lang="ts">
  import type { Tab } from "@js/types";
  import type { Snippet } from "svelte";

  type TabsProps = {
    tabs: Array<Tab>;
    sheet_data: any;
    children?: Snippet;
    active: any;
  };

  import SubmitButton from "@components/ui/form/submitButton.svelte";

  import { fly } from "svelte/transition";

  let {
    tabs,
    sheet_data,
    children,
    active = $bindable(1),
  }: TabsProps = $props();

  function show_tab(index: number): void {
    active = index;

    return;
  }

  function click_next(_event: Event): void {
    // console.log($host())
  }
</script>

<ul class="TabsNav">
  {#each tabs as { label, index }}
    <li class:active={active === index} class="TabsNav-tab">
      <a
        href={`#${label.toLowerCase().replace(" ", "")}`}
        onclick={() => show_tab(index)}
      >
        {label}
      </a>
    </li>
  {/each}
</ul>

<div class="Tabs">
  {#each tabs as { content: Content, index }}
    {#if active == index}
      <section
        class="Tab p-5"
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
