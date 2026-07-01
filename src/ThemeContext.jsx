import { createContext, useState } from "react"

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [tema, setTema] = useState('escuro')

  return (
    <ThemeContext.Provider value={{ tema, setTema }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }