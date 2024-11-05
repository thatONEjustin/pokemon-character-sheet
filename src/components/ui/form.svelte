<script lang="ts">
  // import InputField from "@components/ui/form/inputField.svelte";
  // import Accordion from "@components/ui/accordion.svelte";
  import SubmitButton from "@components/ui/form/submitButton.svelte";

  import TabContent from "@components/ui/tabs.svelte";

  import PlayerInfo from "@sheets/player-info.svelte";

  import { storageAvailable } from "@js/utils";

  // interface FormDataType {
  //   [key: string]: FormDataEntryValue;
  // }

  const tabs = [
    {
      label: "Info",
      index: 1,
      component: PlayerInfo,
    },
  ];

  let form: HTMLFormElement | undefined;
  let form_data: FormData = $state(new FormData(form));
  let user_data: any = $state({});

  $effect((): void => {
    if (
      form_data.entries().toArray().length &&
      storageAvailable("localStorage")
    ) {
      for (const [key, value] of form_data.entries()) {
        localStorage.setItem(key, value as string);
      }

      return;
    }

    const fields: NodeListOf<Element> | undefined = form?.querySelectorAll(
      "input, textarea, select",
    );

    if (fields == undefined) return;

    for (const element of fields) {
      const id = element.getAttribute("id");
      if (id == "" || id == undefined) continue;

      user_data[id] = localStorage.getItem(id);
    }

    // $inspect(user_data);
  });

  function custom_submit(event: Event) {
    event.preventDefault();
    console.log(event);

    form_data = new FormData(form);
  }

  /*
  function parse_formData(form_data: FormData): any {
    let json_data: FormDataType = {};

    form_data.forEach((value: FormDataEntryValue, key: string) => {
      json_data[key] = value;
    });

    return JSON.stringify(json_data);
  }*/
</script>

<form method="POST" onsubmit={custom_submit} bind:this={form}>
  <!--
  <h3>Player Info</h3>
  <fieldset>
    <InputField
      type="text"
      label="Player Name"
      name="player_name"
      value={user_data.player_name}
      id="player_name"
    />

    <div class="grid grid-cols-2 gap-x-4">
      <InputField
        type="text"
        label="Character Name"
        name="character_name"
        id="character_name"
        value={user_data.character_name}
      />

      <InputField
        type="text"
        label="Gym Name"
        name="gym_name"
        id="gym_name"
        value={user_data.gym_name}
      />
    </div>

    <Accordion containerClass="mt-8" collapsed={false}>
      <h4 slot="title">Backstory</h4>

      <svelte:fragment slot="content">
        <InputField
          type="textarea"
          label=""
          rows={10}
          name="backstory"
          id="backstory"
          value={user_data.backstory}
        />
      </svelte:fragment>
    </Accordion>
  </fieldset>
  -->

  <!-- <TabContent {tabs} /> -->

  <SubmitButton>
    Submit
    <i class="nf nf-md-wrench"></i>
  </SubmitButton>
</form>

<style lang="postcss">
  form {
    @apply w-auto
      max-w-xl
      mx-auto;
  }

  /*
  fieldset {
    @apply flex
      flex-col
      my-6;
  } */

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
