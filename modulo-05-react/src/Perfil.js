function Perfil(props) {
    return (
        <div>
            <h2>{props.nome}</h2>
            <p>Desenvolvedor em formação</p>
            <p>{props.cidade}</p>
        </div>
    )
}

export default Perfil