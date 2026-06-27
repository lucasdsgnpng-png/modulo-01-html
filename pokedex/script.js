const nomePokemon = document.querySelector('#input-busca')
const imagemPokemon = document.querySelector('img')
const pokemon = document.querySelector('#nome-pokemon')
const tipo1 = document.querySelector('#tipo1')
const tipo2 = document.querySelector('#tipo2')
const hp = document.querySelector('#hp')
const ataque = document.querySelector('#ataque')
const defesa = document.querySelector('#defesa')

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
       if (dados.types[1]){
        tipo2.textContent = dados.types[1].type.name
        tipo2.style.backgroundColor = corDoTipo(dados.types[1].type.name)            
       } else {
        tipo2.style.display = 'none'
       }
       
        hp.textContent = `HP= ${dados.stats[0].base_stat}`
        ataque.textContent = `Atq= ${dados.stats[1].base_stat}`
        defesa.textContent = `Def= ${dados.stats[2].base_stat}`
 
    }
})


/*
<div id="stats-pokemon">
        <span id="hp">HP:</span>
        <span id="ataque">Ataque:</span>
        <span id="defesa">Defesa:</span>
       </div>

dados.name                          // "pikachu"
dados.sprites.front_default         // URL da imagem
dados.types[0].type.name            // "electric" (tipo 1)
dados.types[1].type.name            // tipo 2 (se existir)


Pra manipular HTML e CSS via JS.

Selecionando elementos
jsdocument.querySelector('#id')      // seleciona por ID
document.querySelector('.classe')  // seleciona por classe
document.querySelector('tag')      // seleciona por tag (ex: 'img', 'input')

Manipulando texto e HTML
jselemento.textContent = 'texto'     // muda o texto puro
elemento.innerHTML = '<b>texto</b>' // muda o HTML interno

Manipulando CSS
jselemento.style.backgroundColor = '#ff0000'  // background-color
elemento.style.color = '#ffffff'            // color
elemento.style.fontSize = '16px'           // font-size
elemento.style.display = 'none'            // esconder elemento
elemento.style.display = 'block'           // mostrar elemento
A regra é sempre: propriedade CSS com hífen → camelCase no JS.

Manipulando atributos HTML
jselemento.src = 'url'           // <img src="">
elemento.href = 'url'          // <a href="">
elemento.alt = 'texto'         // <img alt="">
elemento.id = 'novo-id'        // qualquer atributo de id

Manipulando classes
jselemento.classList.add('classe')     // adiciona uma classe
elemento.classList.remove('classe')  // remove uma classe
elemento.classList.toggle('classe')  // alterna (add/remove)




Mapa de JS puro — as estruturas mais usadas:

Condicionais
js// se / senão se / senão
if (condição) {
  // executa se verdadeiro
} else if (outra condição) {
  // executa se a segunda condição for verdadeira
} else {
  // executa se nenhuma condição for verdadeira
}

// verificar se algo existe
if (variavel) { }           // verdadeiro se existir e não for vazio
if (!variavel) { }          // verdadeiro se NÃO existir ou for vazio
if (variavel === 'valor') { } // verdadeiro se for igual
if (variavel !== 'valor') { } // verdadeiro se for diferente

Funções
js// declaração tradicional
function nomeDaFuncao(parametro) {
  return resultado
}

// chamando a função
nomeDaFuncao('valor')

// salvando o resultado
const resultado = nomeDaFuncao('valor')

Arrays — listas de valores
jsconst lista = ['a', 'b', 'c']

lista[0]          // 'a' — primeiro item
lista[1]          // 'b' — segundo item
lista.length      // 3 — quantidade de itens

// verificar se tem mais de um item
if (lista.length > 1) { }

Objetos
jsconst objeto = {
  chave: 'valor',
  outro: 123
}

objeto.chave        // 'valor' — acesso por ponto
objeto['chave']     // 'valor' — acesso por colchete
objeto['variavel']  // acessa pelo valor da variável

Manipulação de texto
jsconst nome = 'pikachu'

nome.toUpperCase()         // 'PIKACHU'
nome.toLowerCase()         // 'pikachu'
`Olá, ${nome}!`            // 'Olá, pikachu!' — template literal
nome.includes('pika')      // true — verifica se contém

Console — pra depurar
jsconsole.log('texto')       // imprime no console
console.log(variavel)      // imprime o valor da variável
console.log(objeto)        // imprime o objeto inteiro
*/