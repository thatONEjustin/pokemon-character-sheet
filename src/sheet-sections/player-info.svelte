<script lang="ts">
  import InputField from "@components/ui/form/inputField.svelte";
  import Accordion from "@components/ui/accordion.svelte";

  import { storageAvailable } from "@js/utils";

  // let user_data: any = {};
  let fields: HTMLFieldSetElement | undefined;
  let user_data: any = $state({});

  $effect(() => {
    const input_fields: NodeListOf<Element> | undefined =
      fields?.querySelectorAll("input, textarea, select");

    if (input_fields == undefined) return;

    for (const element of input_fields) {
      const id = element.getAttribute("id");
      if (id == "" || id == undefined) continue;

      user_data[id] = localStorage.getItem(id);
    }
  });
</script>

<h3>Player Info</h3>
<fieldset bind:this={fields}>
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
