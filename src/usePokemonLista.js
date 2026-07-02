import { useState, useEffect } from "react"

const usePokemonLista = () => {
    const [lista, setLista] = useState([])

    useEffect(() => {
        const buscarLista = async () => {
            const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=251')
            const dados = await resposta.json()
            setLista(dados.results)  // results é o array de pokémons
        }

        buscarLista()
    }, [])

    return lista
}

export default usePokemonLista