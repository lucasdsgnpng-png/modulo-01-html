function CardPokemon ({pokemon}) {

    const cores = {
  normal: '#9e9e9e',
  fire: '#ff6b35',
  water: '#4fc3f7',
  grass: '#81c784',
  electric: '#ffd54f',
  ice: '#80deea',
  fighting: '#e53935',
  poison: '#6b1593',
  ground: '#d4a373',
  flying: '#4f757f',
  psychic: '#f48fb1',
  bug: '#aed581',
  rock: '#a1887f',
  ghost: '#7e57c2',
  dragon: '#3f51b5',
  dark: '#424242',
  steel: '#b0bec5',
  fairy: '#ce93d8'
}

const corDoTipo = (tipo) => cores[tipo]
    return (
        <section id="card-pokemon">
      <img src={pokemon.sprites.front_default} alt="Imagem do Pokémon" />
      <h2 id="nome-pokemon">{pokemon.name}</h2>
      <div id="tipos-pokemon">
        <span id="tipo1" style={{ backgroundColor: corDoTipo(pokemon.types[0].type.name)
           }}>
          {pokemon.types[0].type.name}
            </span>
        {pokemon.types[1] && (
          <span id="tipo2" style={{ backgroundColor: corDoTipo(pokemon.types[1].type.name)
           }}>
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
    )
}
export default CardPokemon