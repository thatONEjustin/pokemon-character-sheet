<script lang="ts">
  // import type { UserData } from "@js/types";
  import InputField from "@components/ui/form/inputField.svelte";
  import Accordion from "@components/ui/accordion.svelte";

  // import { storageAvailable } from "@js/utils";

  let { sheet_data }: { sheet_data?:object } = $props()

  // const input_field_list = "input, select, textarea"

  let fields: HTMLFieldSetElement | undefined = $state() as HTMLFieldSetElement;
  let user_data:any = $derived(sheet_data)

  $effect(() => {
    $inspect(user_data)
  });
</script>

<h3>Player Info</h3>
<fieldset bind:this={fields}>
  <InputField
    type="text"
    label="Player Name"
    name="player_name"
    value={user_data?.player_name}
    id="player_name"
  />

  <div class="grid grid-cols-2 gap-x-4">
    <InputField
      type="text"
      label="Character Name"
      name="character_name"
      id="character_name"
      value={user_data?.character_name}
    />

    <InputField
      type="text"
      label="Gym Name"
      name="gym_name"
      id="gym_name"
      value={user_data?.gym_name}
    />
  </div>

  <Accordion containerClass="mt-8">
    {#snippet title()}
      <h4>Backstory</h4>
    {/snippet}

    <InputField
      type="textarea"
      hideLabel={true}
      label="Backstory"
      rows={10}
      name="backstory"
      id="backstory"
      value={user_data?.backstory}
      />
  </Accordion>
</fieldset>
