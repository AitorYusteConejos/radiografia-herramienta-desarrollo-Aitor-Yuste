const anterior = document.querySelector(".anterior");
const siguiente = document.querySelector(".siguiente");
const slides = document.querySelectorAll(".slide");

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
    console.log("pulsado siguiente");
});

anterior.addEventListener("click", function () {
    slides[actual].classList.remove("activo");

    actual--;

    if (actual < 0) {
        actual = slides.length - 1;
    }

    slides[actual].classList.add("activo");
    console.log("pulsado anterior");
});