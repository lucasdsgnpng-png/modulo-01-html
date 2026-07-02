import { useState, useEffect } from "react"

const usePokemon = (nome) => {
    const [pokemon, setPokemon] = useState(null)

     const buscarPokemon = async () => {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    if (!resposta.ok){
              window.alert(`O nome que você digitou não existe, tente novamente.`)
              return
            }
            const dados = await resposta.json()
            return setPokemon(dados)
  }

  useEffect ( () => {
    buscarPokemon(nome)
  },[nome])

  return pokemon
}

export default usePokemon