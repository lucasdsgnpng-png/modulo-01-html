import { useState, useEffect} from 'react'

function Pokemon() {
    const [busca, setBusca] = useState("")
    const [pokemon, setPokemon] = useState(null)
    
    function buscarPokemon(){
        fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`)
        .then(resposta => resposta.json())
        .then(dados => setPokemon(dados))
    }
    

    return (

        <div>
            <input type="text" value ={busca} onChange={e =>setBusca(e.target.value)} placeholder="Digite o nome do pokémon" />
            <button onClick={buscarPokemon}>Buscar</button>
        
            {pokemon && (
                <div>
                  <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        </div>       
            )}
            </div>
    
    
    )
}

export default Pokemon

/*fetch('https://pokeapi.co/api/v2/pokemon/pikachu')

useEffect(()=> {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then(resposta => resposta.json())
        .then(dados => setPokemon(dados))
    }, [])
    */
   