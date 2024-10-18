const nasLinks = document.querySelectorAll(".navbar ul li a");
const menuLinks = document.querySelectorAll(".menu ul li a");
const iconeLista = document.querySelector("div.icone-lista");
const iconeFechaLista = document.querySelector("div.icone-fecha-lista");
const lista = document.querySelector("div.lista");
const listaOculta = document.querySelector("div.menu");

nasLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    nasLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    menuLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});

const opcoes = document.getElementById("opcoes");
function mostraIconeLista() {
  listaOculta.style.display = "block";
  iconeLista.style.display = "none";
  iconeFechaLista.style.display = "flex";
  opcoes.style.display = "none";
}
function fechaLista() {
  listaOculta.style.display = "none";
  iconeFechaLista.style.display = "none";
  iconeLista.style.display = "flex";
  opcoes.style.display = "block";
}
