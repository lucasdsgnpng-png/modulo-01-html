const nome = "Lucas"
let profissão = "Desenvolvedor em formação"
console.log(nome)
console.log(profissão)
const titulo = document.querySelector("h1")
titulo.textContent = "Lucas de Oliveira Rabelo"

function apresentar(nome, profissão) {
  console.log("Olá,meu nome é " + nome + " e eu sou " + profissão + "!")
}
apresentar("Lucas", "Desenvolvedor em formação")

const botao = document.querySelector("#meu-botao")

botao.addEventListener("click", function() {
  console.log("Botão clicado!")
})
const btnTema = document.querySelector("#btn-tema")
btnTema.addEventListener("click", function() {
    document.body.classList.toggle("modo-escuro")
})