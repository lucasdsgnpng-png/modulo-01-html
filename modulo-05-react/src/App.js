import Perfil from './Perfil.js'
import Contador from './Contador.js'
import Pokemon from './Pokemon.js'

import {useState, useEffect} from 'react'


function App(){

  useEffect(() => {
  console.log('Componente carregou!')
  document.title= "meu site react"
},[])

  return (
    <div>
      <h1>Meu Site em React!</h1>
      <Perfil nome="Lucas" cidade="Nova Serrana"/>
      <Perfil nome="Maria" cidade="São Paulo"/>
      <Contador/>
      <Pokemon />
    </div>
  )
}
export default App