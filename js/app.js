const anterior = document.querySelector(".anterior");
const siguiente = document.querySelector(".siguiente");
const slides = document.querySelectorAll(".slide");
const mensajeCarrusel = document.querySelector("#mensaje-carrusel");
const botonInfo = document.querySelector("#boton-info");
const infoPagina = document.querySelector("#info-pagina");


import { animes } from "./datos.js";
const listaAnimes = document.querySelector(".lista-animes");

let actual = 0;

console.log(anterior);
console.log(siguiente);
console.log(slides);

siguiente.addEventListener("click", function () {
    slides[actual].classList.remove("activo");

    actual++;

    if (actual == slides.length) {
        actual = 0;
    }

    slides[actual].classList.add("activo");
    

    mensajeCarrusel.textContent = `pulsado siguiente. Actual: ${actual}`;
});


siguiente.addEventListener("click", function () {
    console.log("pulsado siguiente");
});

anterior.addEventListener("click", function () {
    slides[actual].classList.remove("activo");

    actual--;

    if (actual < 0) {
        actual = slides.length - 1;
    }

    slides[actual].classList.add("activo");
    
    mensajeCarrusel.textContent = `pulsado anterior. Actual: ${actual}`;
});

anterior.addEventListener("click", function () {
    console.log("pulsado anterior");
});

botonInfo.addEventListener("click", function () {
    infoPagina.classList.toggle("d-none");
})

for (const anime of animes) {
    const animeDiv = document.createElement("div");
    animeDiv.classList.add("anime");

    const nombre = document.createElement("h4");
    nombre.textContent = anime.nombre;

    const categoria = document.createElement("p");
    categoria.textContent = `Categoría: ${anime.categoria}`;

    const descripcion = document.createElement("p");
    descripcion.textContent = anime.descripcion;

    animeDiv.appendChild(nombre);
    animeDiv.appendChild(categoria);
    animeDiv.appendChild(descripcion);

    listaAnimes.appendChild(animeDiv);
}