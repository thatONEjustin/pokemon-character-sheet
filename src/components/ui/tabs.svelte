<script>
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const { tabs } = $$restProps;

  let active = 1;

  function save(event) {
    console.log(event);
    dispatch("savesheet", {
      data: new FormData(document.querySelector("form")),
    });
  }

  // function show(which) {
  //   active = which
  // }

  const show = (tab_index) => () => (active = tab_index);
</script>

<ul class="mb-[-2px] flex items-stretch border-b-white border-b z-20">
  {#each tabs as { label, index }}
    <li
      class="inline-flex rounded-t-md px-5 py-2.5 {active === index
        ? 'active'
        : ''}"
    >
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" on:click={save} on:click|preventDefault={show(index)}>
        {label}
      </a>
    </li>
  {/each}
</ul>

<div class="rounded-b-md border border-gray-200 bg-white overflow-hidden z-10">
  {#each tabs as { component, index }}
    {#if active == index}
      <section
        class="tab p-5"
        in:fly={{ x: "100%", y: 0, delay: 350 }}
        out:fly={{ x: "-100%", y: 0, duration: 250 }}
      >
        <svelte:component this={component} />
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
