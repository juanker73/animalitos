// Declara una variable global para almacenar el audio actual.
let audioActual = null;

// Define una función para reproducir el audio y detener el audio actual si hay uno.
function reproducirAudio(nuevoAudio) {
  if (audioActual !== null) {
    audioActual.pause();
  }
  audioActual = nuevoAudio;
  audioActual.play();
}

// Asigna la función de reproducirAudio() a cada elemento de imagen en el documento.
const gallina = document.getElementById("gallina");
gallina.addEventListener("click", () => {
  reproducirAudio(new Audio("audio/gallina.mp3"));
});

const gallo = document.getElementById("gallo");
gallo.addEventListener("click", () => {
  reproducirAudio(new Audio("audio/gallo.mp3"));
});

const pollito = document.getElementById("pollito");
pollito.addEventListener("click", () => {
  reproducirAudio(new Audio("audio/pollito.mp3"));
});

const perro = document.getElementById("perro");
perro.addEventListener("click", () => {
  reproducirAudio(new Audio("audio/perro.mp3"));
});

const gato = document.getElementById("gato");
gato.addEventListener("click", () => {
  reproducirAudio(new Audio("audio/gato.mp3"));
});

const raton = document.getElementById("raton");
raton.addEventListener("click", () => {
  reproducirAudio(new Audio("audio/raton.mp3"));
});

const oveja = document.getElementById("oveja");
oveja.addEventListener("click", () => {
  reproducirAudio(new Audio("audio/oveja.mp3"));
});

const vaca = document.getElementById("vaca");
vaca.addEventListener("click", () => {
  reproducirAudio(new Audio("audio/vaca.mp3"));
});

const cerdo = document.getElementById("cerdo");
cerdo.addEventListener("click", () => {
  reproducirAudio(new Audio("audio/cerdo.mp3"));
});

const abeja = document.getElementById("abeja");
abeja.addEventListener("click", () => {
  reproducirAudio(new Audio("audio/abeja.mp3"));
});
