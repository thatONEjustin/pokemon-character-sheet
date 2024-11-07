<script lang="ts">
  import type { Tab, Snippet } from "@js/types";

  import TabContent from "@components/ui/tabs.svelte";

  import PlayerInfo from "@sheets/player-info.svelte";
  import PokemonInfo from "@sheets/pokemon.svelte";

  import { storageAvailable } from "@js/utils";
  // import SubmitButton from "./form/submitButton.svelte";

  const tabs: Array<Tab> = [
    {
      label: "Info",
      index: 1,
      content: PlayerInfo as Snippet,
    },
    {
      label: "Info2",
      index: 2,
      content: PokemonInfo as Snippet,
    },
  ];

  let form: HTMLFormElement | undefined;
  let form_data: FormData = $state(new FormData(form));
  const input_fields_list: Array<string> = ["input", "select", "textarea"];

  let sheet_data: any = $state({});
  let active: number = $state(1);

  $effect((): void => {
    const init: number = form_data.entries().toArray().length;

    if (init === 0) {
      const fields = form?.querySelectorAll(input_fields_list.join());

      if (fields == undefined) return;
      if (storageAvailable("localStorage") == false) return;

      for (const input_field of fields) {
        // console.log(input_field);
        const key: string = input_field.getAttribute("name") as string;

        if (!localStorage.getItem(key)) return;

        sheet_data[key] = localStorage.getItem(key) as string;
      }

      return;
    }

    for (const [key, value] of form_data.entries()) {
      if (localStorage.getItem(key) == (value as string)) continue; //skip if localStorage hasn't changed

      update_field(key, value as string);
    }
  });

  function update_field(key: string, value: string) {
    localStorage.setItem(key, value);
    sheet_data[key] = value;
  }

  function onsubmit(event: SubmitEvent) {
    form_data = new FormData(form);

    const submitter: HTMLElement = event.submitter as HTMLElement;

    if (submitter.getAttribute("name") == "submit_next") {
      // console.log(submitter);
      console.log(active, tabs.length);
      if (active >= tabs.length) {
        active = 1;
        return;
      }

      active++;
      return;
    }
  }
</script>

<form method="POST" {onsubmit} bind:this={form}>
  <TabContent {tabs} {sheet_data} {active} />
</form>

<style lang="postcss">
  form {
    @apply w-auto
      max-w-xl
      mx-auto;
  }

  :global(h1) {
    @apply text-4xl;
  }

  :global(h2) {
    @apply text-3xl;
  }

  :global(h3) {
    @apply text-2xl;
  }

  :global(h4) {
    @apply text-xl;
  }

  :global(h5) {
    @apply text-lg;
  }
</style>
