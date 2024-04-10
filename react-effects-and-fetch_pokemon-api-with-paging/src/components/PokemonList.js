import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [next, setNext] = useState(0)

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${next}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [next]);

  function handleNextButton() {
    setNext(next + 20)
  }

  function handlePreviousButton(){
    //if (next >=20)
    setNext(next - 20)
  }

  return (
    <main>
      {next <= 0 ? "" : <button type="button" onClick={handlePreviousButton}>Previous Page</button>}
      <button type="button" onClick={handleNextButton}>Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
