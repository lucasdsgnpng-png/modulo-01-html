import Perfil from './Perfil.js'
import Contador from './Contador.js'

function App(){
  return (
    <div>
      <h1>Meu Site em React!</h1>
      <Perfil nome="Lucas" cidade="Nova Serrana"/>
      <Perfil nome="Maria" cidade="São Paulo"/>
      <Contador/>
    </div>
  )
}
export default App