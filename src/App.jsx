import { useState, useEffect } from "react"
import './App.css'
import CardPokemon from "./CardPokemon"
import Header from "./Header"

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

  useEffect ( () => {
    buscarPokemon('Pikachu')
  },[])


  return (
    <div>
      
      <Header busca ={busca} setBusca={setBusca} buscarPokemon={buscarPokemon} />

      {pokemon && <CardPokemon pokemon={pokemon} />}
        
    </div>
  )
}

export default App