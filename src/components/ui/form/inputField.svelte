<script lang="ts">
  import type { Snippet } from "svelte";

  type TextInput = {
    name: string;
    type: string;
    id: string;
    hideLabel?: boolean;
    label: string;
    labelTag?: Snippet;
    required?: boolean;
    className?: string;
    rows?: number;
    placeholder?: string;
    value?: string;
  };

  type TextInputElement =
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement;

  import { fade } from "svelte/transition";

  let {
    name = "",
    type = "",
    id = "",
    label = "",
    labelTag,
    hideLabel = false,
    required = false,
    className = "",
    rows = 4,
    placeholder = "",
    value = $bindable(""),
  }: TextInput = $props();

  let input: TextInputElement = $state() as TextInputElement;

  let display_placeholder: string = $derived.by(() => {
    return placeholder != ""
      ? placeholder
      : `Enter ${name.replaceAll("_", " ")} here`;
  });

  let editing: boolean = $state(false);

  function input_field_save(_event: Event) {
    editing = !editing;

    if (editing) return;

    value = input.value;
  }
</script>

<div class={`${className} input-field`}>
  {#if labelTag && !hideLabel}
    {@render labelTag()}
  {:else if !hideLabel}
    <label for={name}>{label}</label>
  {/if}

  {#if !editing && value != ""}
    <button
      class:has-value={value != ""}
      type="button"
      onclick={input_field_save}
    >
      {value}
    </button>
  {/if}

  {#if type != "textarea"}
    <input
      {name}
      {type}
      {id}
      {value}
      {required}
      placeholder={display_placeholder}
      class:hidden={!editing && value != ""}
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
      class:hidden={!editing && value != ""}
      bind:this={input}>{value}</textarea
    >
  {/if}

  {#if editing || value != ""}
    <button
      class="edit"
      class:hidden={!editing || value == ""}
      type="submit"
      onclick={input_field_save}
    >
      Save
    </button>
  {/if}
</div>
