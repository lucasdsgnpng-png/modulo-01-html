import { useState } from "react"
import './App.css'

function App () {

  const [busca, setBusca] = useState ('')
  const [pokemon, setPokemon] = useState(null)

  const buscarPokemon = async (nome) => {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    if (!resposta.ok){
              window.alert(`O nome que você digitou não existe, tente novamente.`)
              return
            }
            const dados = await resposta.json()
            return setPokemon(dados)
  }



  return (
    <div>
      <h1>Pokédex</h1>
      <input
        type="text"
        placeholder="Digite o nome do Pokémon"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
          buscarPokemon(busca)
        }
      }}
      /> 

      {pokemon && (
        <section id="card-pokemon">
      <img src={pokemon.sprites.front_default} alt="Imagem do Pokémon" />
      <h2 id="nome-pokemon">{pokemon.name}</h2>
      <div id="tipos-pokemon">
        <span id="tipo1">{pokemon.types[0].type.name}</span>
        {pokemon.types[1] && (
          <span id="tipo2">{pokemon.types[1].type.name}</span>
        )}
        
       </div>
       <div id="stats-pokemon">
        <span id="hp">{`Hp: ${pokemon.stats[0].base_stat}`}</span>
        <span id="ataque">{`Atq: ${pokemon.stats[1].base_stat}`}</span>
        <span id="defesa">{`Def: ${pokemon.stats[2].base_stat}`}</span>
       </div>
    </section>
      )}

    </div>
  )
}

export default App