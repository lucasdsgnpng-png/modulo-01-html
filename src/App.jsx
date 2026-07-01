import { useState, useEffect, useContext} from "react"
import './App.css'
import { ThemeContext } from "./ThemeContext"
import { Routes, Route } from 'react-router-dom'
import PaginaPrincipal from './PaginaPrincipal'
import  PaginaDetalhes from './PaginaDetalhes.jsx'

function App () {

  const { tema} = useContext(ThemeContext)
  return (
    <div className={tema}>
      <Routes>
  <Route path="/" element={<PaginaPrincipal />} />
  <Route path="/pokemon/:nome" element={<PaginaDetalhes />} />
</Routes>
        
    </div>
  )
}

export default App