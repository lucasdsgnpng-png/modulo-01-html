const nomePokemon = document.querySelector('#input-busca')
const imagemPokemon = document.querySelector('img')
const pokemon = document.querySelector('#nome-pokemon')
const tipo1 = document.querySelector('#tipo1')
const tipo2 = document.querySelector('#tipo2')

const cores = {
    fire: '#ff6b35',
  water: '#4fc3f7',
  grass: '#81c784',
  electric: '#ffd54f',
  poison: '#6b1593',
  flying:'#4f757f'
}

function corDoTipo(tipo){
    const cor = cores[tipo]
    return cor
}


async function buscarPokemon(nome) {
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
            const dados = await resposta.json()
            return dados          
        }

nomePokemon.addEventListener('keydown', async function(evento) {
    if (evento.key === 'Enter') {
        const dados = await buscarPokemon(nomePokemon.value)
        
       imagemPokemon.src = dados.sprites.front_default
       pokemon.textContent = dados.name
       tipo1.textContent = dados.types[0].type.name
       tipo1.style.backgroundColor = corDoTipo(dados.types[0].type.name)
       tipo2.textContent = dados.types[1].type.name
       tipo2.style.backgroundColor = corDoTipo(dados.types[1].type.name)
    }
})


/*dados.name                          // "pikachu"
dados.sprites.front_default         // URL da imagem
dados.types[0].type.name            // "electric" (tipo 1)
dados.types[1].type.name            // tipo 2 (se existir)
*/