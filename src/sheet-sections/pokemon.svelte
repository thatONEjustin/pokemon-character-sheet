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

  const POKE_API_URL: string = "https://pokeapi.co/api/v2/";
  let next_page = "pokemon/?limit=150";

  async function load_pokemon(request_url: string) {
    const request = await fetch(request_url);
    const data = await request.json();

    if (data.next) {
      // next_page = data.next.split("?")[0];
    }

    return data;
  }
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

{#await load_pokemon(POKE_API_URL + next_page) then pokemon}
  {@const pokemon_list = pokemon.results.map((pokemon_entry: any) => {
    return pokemon_entry.name;
  })}
{/await}

<!-- 
{#each pokemon as pokemon_data, key}
  {@render pokemon_snippet(pokemon_data, key)}
{/each}
-->
