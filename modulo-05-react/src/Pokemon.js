import { useState, useEffect} from 'react'

function Pokemon() {
    const [pokemon, setPokemon] = useState(null)
    
    useEffect(()=> {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then(resposta => resposta.json())
        .then(dados => setPokemon(dados))
    }, [])

    if (!pokemon) return <p>Carregando...</p>

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        </div> 
    )
}

export default Pokemon