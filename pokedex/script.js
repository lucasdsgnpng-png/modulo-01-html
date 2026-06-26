const nomePokemon = document.querySelector('#input-busca')
const imagemPokemon = document.querySelector('img')
const pokemon = document.querySelector('#nome-pokemon')
const tipo1 = document.querySelector('#tipo1')
const tipo2 = document.querySelector('#tipo2')
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
       tipo2.textContent = dados.types[1].type.name
    }
})


/*dados.name                          // "pikachu"
dados.sprites.front_default         // URL da imagem
dados.types[0].type.name            // "electric" (tipo 1)
dados.types[1].type.name            // tipo 2 (se existir)
*/