import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Header({ busca, setBusca, buscarPokemon }) {
  const { tema, setTema } = useContext(ThemeContext)
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
      <button id="botao-tema" onClick={() => setTema(tema === 'escuro' ? 'claro' : 'escuro')}>
          Alternar tema
      </button>
      
        </>
      
        
    )
  // agora você tem acesso ao tema e à função de mudar ele
}
 

export default Header