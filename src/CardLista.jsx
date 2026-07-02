import { useNavigate } from 'react-router-dom'

function CardLista({ nome, url }) {
    const navigate = useNavigate()
    const id = url.split('/')[6]
    const imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
        <div className="card-lista" onClick={() => navigate(`/pokemon/${nome}`)}>
            <img src={imagem} alt={nome} />
            <p>{nome}</p>
        </div>
    )
}

export default CardLista