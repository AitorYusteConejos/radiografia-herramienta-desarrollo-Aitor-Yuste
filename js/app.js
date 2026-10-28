const anterior = document.querySelector(".anterior");
const siguiente = document.querySelector(".siguiente");
const slides = document.querySelectorAll(".slide");
const mensajeCarrusel = document.querySelector("#mensaje-carrusel");

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