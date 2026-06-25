const nome = "Lucas"
let profissão = "Desenvolvedor em formação"
console.log(nome)
console.log(profissão)
const titulo = document.querySelector("h1")
titulo.textContent = "Lucas de Oliveira Rabelo"

const perfil = {
  meuNome:"Lucas",
  cidade:"Nova Serrana",
  estado: "Minas Gerais"
}

console.log(perfil.meuNome)
console.log(perfil.cidade)
console.log(perfil.estado)

const {meuNome,cidade,estado} = perfil
console.log(meuNome)
console.log(cidade)
console.log(estado)

const apresentar = (meuNnome, profissão) => {
  return `Olá, meu nome é ${nome} e eu sou ${profissão}!`
}
console.log(apresentar("Lucas", "Desenvolvedor em formação"))

const habilidades = ["HTML","CSS","JavaScript"]

const lista = habilidades.map((habilidade) => {
  return `✅ ${habilidade}`
})
console.log(lista)

const botao = document.querySelector("#meu-botao")

botao.addEventListener("click", function() {
  console.log("Botão clicado!")
})
const btnTema = document.querySelector("#btn-tema")
btnTema.addEventListener("click", function() {
    document.body.classList.toggle("modo-escuro")
})