<script lang="ts">
  import InputField from "@components/ui/form/inputField.svelte";
  import Accordion from "@components/ui/accordion.svelte";

  let { user_data } = $props();
</script>

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
