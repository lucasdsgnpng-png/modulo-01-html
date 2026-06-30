function Header ({busca, setBusca, buscarPokemon}) {
    return (
        <>
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
        </>
        
    )
}

export default Header