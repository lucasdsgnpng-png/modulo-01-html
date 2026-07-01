import { useState, useEffect,} from "react"
import { useNavigate, useParams } from "react-router-dom"


function PaginaDetalhes() {
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState(null)
  const buscarPokemon = async (nome) => {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
         const dados = await resposta.json()
            return setPokemon(dados)
          }        

   const { nome } = useParams()
    useEffect ( () => {
      buscarPokemon(nome)
      },[nome])

   return (
    <div>
      <button id="botao-tema" onClick={() => navigate('/')}>Voltar</button>
       {pokemon && 
        <section id="card-pokemon">
      <img src={pokemon.sprites.front_default} alt="Imagem do Pokémon" />
      <h2 id="nome-pokemon">{pokemon.name}</h2>
      <div id="tipos-pokemon">
        <span id="tipo1" >
          {pokemon.types[0].type.name}
            </span>
        {pokemon.types[1] && (
          <span id="tipo2">
          {pokemon.types[1].type.name}
            </span>
        )}
        
       </div>
       <div id="stats-pokemon">
        <span id="hp">{`Hp: ${pokemon.stats[0].base_stat}`}</span>
        <span id="ataque">{`Atq: ${pokemon.stats[1].base_stat}`}</span>
        <span id="defesa">{`Def: ${pokemon.stats[2].base_stat}`}</span>
       </div>
    </section>
      }
    </div>
     
  )
}
  

export default PaginaDetalhes


//      `/pokemon/${pokemon.name}`

/* 
const buscarPokemon = async (nome) => {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    if (!resposta.ok){
              window.alert(`O nome que você digitou não existe, tente novamente.`)
              return
            }
            const dados = await resposta.json()
            return setPokemon(dados)
  }
*/