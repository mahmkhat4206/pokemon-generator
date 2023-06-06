import './App.css';
import { useState } from 'react';
import Axios from "axios";

function App() {

  const [pokeName, setPokeName] = useState("");
  const [chosenPokemon, setChosenPokemon] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    img: "",
    Hp: "",
    Attack: "",
    Defence: "",
    Type: "",
    speed: "",
  })





  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(
      (response) => {
        setPokemon({
           name: pokeName, 
           img: response.data.sprites.front_default, 
           hp: response.data.stats[0].base_stat,
           attack: response.data.stats[1].base_stat,
           defence: response.data.stats[2].base_stat,
           type: response.data.types[0].type.name,
           speed: response.data.stats[5].base_stat
         });
         setChosenPokemon(true)
      }
    );
  };
  return (
    
    <div className="App">
      <div className="title">
        <h1>Welcome, Please type a pokemon to search and press the button to get a pokemon</h1>
        <input type="text" onChange={(event) => {setPokeName(event.target.value);
        }}
        />
        <button onClick={searchPokemon}>Get Pokemon</button>
      </div>
      <div className="Display">{!chosenPokemon ? ("") : (
      <>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.img} />
      <h3>type: {pokemon.type}</h3>
      <h4>hp: {pokemon.hp}</h4>
      <h4>Attack: {pokemon.attack}</h4>
      <h4>Defence: {pokemon.defence}</h4>
      <h4>Speed: {pokemon.speed}</h4>
      </>
      )}
      </div>
    </div>
  );
}





export default App;
