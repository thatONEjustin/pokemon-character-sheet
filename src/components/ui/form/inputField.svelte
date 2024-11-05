<script lang="ts">
  interface TextInput {
    name: string;
    type: string;
    id: string;
    label: string;
    required?: boolean;
    className?: string;
    rows?: number;
    placeholder?: string;
    editing?: boolean;
    value?: string;
  }

  let {
    name = "",
    type = "",
    id = "",
    label = "",
    required = false,
    className = "",
    rows = 4,
    placeholder = "",
    editing = false,
    value = "",
  }: TextInput = $props();

  let display_placeholder: string = $state(`Enter ${label} Here`);
  let input: HTMLInputElement | HTMLTextAreaElement = $state() as
    | HTMLInputElement
    | HTMLTextAreaElement;

  if (placeholder != "") {
    display_placeholder = placeholder;
  }

  function onclick(_event: Event) {
    editing = !editing;

    if (!editing) {
      value = input.value;
    }
  }
</script>

<div class={className}>
  <label for={name}>{label}</label>

  <button
    class:has-value={value != ""}
    class:hidden={editing}
    type="button"
    name={`submit_${name}`}
    id={`submit_${name}`}
    {onclick}>{value}</button
  >

  {#if type != "textarea"}
    <input
      {name}
      {type}
      {id}
      {value}
      {required}
      placeholder={display_placeholder}
      class:hidden={!editing}
      bind:this={input}
    />
  {/if}

  {#if type == "textarea"}
    <textarea
      {name}
      {id}
      {rows}
      {required}
      placeholder={display_placeholder}
      class:hidden={!editing}
      bind:this={input}>{value}</textarea
    >
  {/if}

  <button class="edit" class:hidden={!editing} type="submit" {onclick}
    >Save</button
  >
</div>

<style lang="postcss">
  div {
    @apply flex
      flex-col
      my-3;
  }
  div > label {
    @apply pb-1
        text-aro-400
        mb-3;
  }

  div > button {
    @apply py-3
        cursor-pointer
        text-aro-400
        text-left;
  }

  div > button.has-value {
    @apply text-vanHelsing-800
          decoration-dotted
          font-bold;
  }

  div > input,
  div > textarea {
    @apply w-full;

    @apply w-full
        bg-nosferatu-800
        text-lincoln
        border
        border-black
        rounded-md
        p-3;
  }

  div > button.edit {
    @apply bg-vanHelsing-800
      text-cullen
      border
      border-vanHelsing-800
      rounded-md
      mt-2
      px-4
      py-2
      cursor-pointer
      w-max
      max-w-max;
  }
</style>
