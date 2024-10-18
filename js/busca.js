const btnBusca = document.getElementById("btnBusca");
const btnacao = document.getElementById("acao");
const btnquebraCabeca = document.getElementById("quebra-cabeca");
const btnCorrida = document.getElementById("corrida");
const btnEsportes = document.getElementById("esportes");
const btnRpg = document.getElementById("rpg");
const btnRetro = document.getElementById("retro");

const sectionAcao2 = document.getElementById("acao2");
const sectionRpg2 = document.getElementById("rpg2");
const sectionCorrida2 = document.getElementById("corrida2");
const sectionEsporte2 = document.getElementById("esporte2");
const sectionEstrategia2 = document.getElementById("estrategia2");
const sectionRetro2 = document.getElementById("retro2");

function buscaAcao() {
  sectionAcao2.classList.toggle("sectionMostra");
  sectionAcao2.classList.toggle("sectionEsconde");
}
function buscaRpg() {
  sectionRpg2.classList.toggle("sectionMostra");
  sectionRpg2.classList.toggle("sectionEsconde");
}
function buscaCorrida() {
  sectionCorrida2.classList.toggle("sectionMostra");
  sectionCorrida2.classList.toggle("sectionEsconde");
}
function buscaEsportes() {
  sectionEsporte2.classList.toggle("sectionMostra");
  sectionEsporte2.classList.toggle("sectionEsconde");
}
function buscaEstrategia() {
  sectionEstrategia2.classList.toggle("sectionMostra");
  sectionEstrategia2.classList.toggle("sectionEsconde");
}
function buscaRetro() {
  sectionRetro2.classList.toggle("sectionMostra");
  sectionRetro2.classList.toggle("sectionEsconde");
}
