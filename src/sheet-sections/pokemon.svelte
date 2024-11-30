<script lang="ts">
  import InputField from "@components/ui/form/inputField.svelte";

  interface StabStats {
    weak: Array<string>;
    strong: Array<string>;
  }

  interface PokemonElementType {
    name: string;
    stab: StabStats;
  }
  interface PokemonMove {
    name: string;
    type: Array<string>;
    die: number;
  }

  interface PokemonType {
    name: string;
    type: Array<PokemonElementType>;
    mastery: number;
    experience: number;
    toughness: number;
    moves: Array<PokemonMove>;
  }

  let pokemon: Array<PokemonType> = $state([
    {
      name: "Psyduck",
      mastery: 0,
      toughness: 3,
      experience: 0,
      type: [
        {
          name: "Psychic",
          stab: {
            weak: ["dark"],
            strong: ["normal"],
          },
        },
        {
          name: "Water",
          stab: {
            weak: ["electric"],
            strong: ["fire"],
          },
        },
      ],
      moves: [
        {
          name: "Water Gun",
          type: ["water"],
          die: 6,
        },
      ],
    },
  ]);
</script>

{#snippet pokemon_snippet(pokemon: PokemonType, key: any)}
  <div>
    <InputField
      type="text"
      label="Pokemon Name"
      name={`pokemon_name_${key}`}
      id="pokemon_name"
      value={pokemon.name}
    />
  </div>
{/snippet}

<h1>Pokemon</h1>

{#each pokemon as pokemon_data, key}
  {@render pokemon_snippet(pokemon_data, key)}
{/each}
