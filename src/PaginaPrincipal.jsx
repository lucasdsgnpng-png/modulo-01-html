import { useState, useEffect, useContext} from "react"
import CardPokemon from "./CardPokemon"
import Header from "./Header"
import usePokemon from "./usePokemon"

function PaginaPrincipal () {

  const [busca, setBusca] = useState ('')
  const [nomeBuscado, setNomeBuscado] = useState('Pikachu')
  
  const pokemon = usePokemon(nomeBuscado)
    
              
  return (
    <>
      <Header busca={busca} setBusca={setBusca} setNomeBuscado={setNomeBuscado} />
      {pokemon && <CardPokemon pokemon={pokemon} />}
    </>
  )
}
export default PaginaPrincipal