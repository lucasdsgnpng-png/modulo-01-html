import { useState, useMemo } from "react"
import Header from "./Header"
import CardLista from "./CardLista"
import usePokemonLista from "./usePokemonLista"

function PaginaPrincipal() {
  const [busca, setBusca] = useState('')
  const [nomeBuscado, setNomeBuscado] = useState('')
  const lista = usePokemonLista()

  const listaFiltrada = useMemo(() => {
    return lista.filter(pokemon => 
        pokemon.name.includes(busca.toLowerCase())
    )
}, [lista, busca])

  return (
    <>
      <Header busca={busca} setBusca={setBusca} setNomeBuscado={setNomeBuscado} />
      
      <div id="grid-pokemon">
        {listaFiltrada.map((pokemon) => (
          <CardLista key={pokemon.name} nome={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </>
  )
}

export default PaginaPrincipal