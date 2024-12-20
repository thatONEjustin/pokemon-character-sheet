<script lang="ts">
  import DropdownField from "@components/ui/form/dropdownField.svelte";

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
  let next_page = "pokemon/?offset=0&limit=150";

  // let url = "https://pokeapi.co/api/v2/pokemon/?limit=150"

  async function load_pokemon(request_url: string) {
    const request = await fetch(request_url);
    const data = await request.json();

    return data;
  }

  let user_pokemon = [
    {
      name: "bulbasaur",
    },
    {
      name: "wartortle",
    },
  ];
</script>

{#snippet pokemon_snippet(pokemon_names, value)}
  <div class="PokemonEntry">
    <DropdownField options={pokemon_names} id="select_pokemon" {value} />
  </div>
{/snippet}

<h3>Pokemon</h3>

{#await load_pokemon(POKE_API_URL + next_page) then pokemon_data}
  {@const pokemon_names = pokemon_data.results.map((pokemon_entry: any) => {
    return {
      label: pokemon_entry.name,
      value: pokemon_entry.name,
    };
  })}

  {#each user_pokemon as pokemon}
    {@render pokemon_snippet(pokemon_names, pokemon.name)}
  {/each}
{/await}
