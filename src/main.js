// src/main.js
import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import perfil1 from "./imgs/anime-girl-favorite-face.jpg";
// components imports start here
import { Pagina2 } from "./components/pagina2.js";
import { PanelCorona } from "./components/PanelCorona.js";
import { Loader } from "./components/loader.js";
// components imports end here

customElements.define("loader-component", Loader);
customElements.define("pagina-2", Pagina2);
customElements.define("panel-corona", PanelCorona);



document.querySelector("#app-container").innerHTML =
  /*html*/
  `
  <section id="first-container">
  <div id="perfil-container">
  <div id="perfil-1">
  <img  src="${perfil1}" alt="perfil-1">
  </div>
  </div>
  
  
  <div id="icon-container>
  <a href="https://vite.dev" target="_blank">
  <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
  <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
  </a>
  <div class="card">
  <button id="counter" type="button"></button>
    </div>
    
      </div>
      </section>
      <section id="second-container">
      <panel-corona></panel-corona>
      
      <pagina-2></pagina-2>
      <pagina-2></pagina-2>
      <button id="btn-mostrar-loader">mostrar loader</button>
      <loader-component></loader-component>
      </section>
  
`;

setupCounter(document.querySelector("#counter"));
// test

// <title>Indicador de Pasos Animado con JS</title>
// variables solo accedidas después de render start
const loaderContainer = document.querySelector("#loader-container");
const progressInLoader = document.querySelector("progress");

const indicador = document.querySelector(".step-indicator");
const contador = indicador.querySelector(".step-count");
const objetivo = indicador.querySelector(".step-goal");
const progreso = indicador.querySelector(".progress-ring-foreground");
const radio = 42;
const circunferencia = 2 * Math.PI * radio;
// end variable declarations

function actualizarIndicadorAnimado(pasosActuales, pasosObjetivo, duracion = 1000) {
  contador.textContent = Math.round(pasosActuales);
  objetivo.textContent = Math.round(pasosObjetivo);

  const progresoPorcentaje = Math.min(pasosActuales / pasosObjetivo, 1);
  const offsetFinal = circunferencia * (1 - progresoPorcentaje);

  // Detener cualquier animación previa
  if (progreso.animation) {
    progreso.animation.cancel();
  }

  progreso
    .animate(
      [
        { strokeDashoffset: circunferencia }, // Inicio (círculo vacío)
        { strokeDashoffset: offsetFinal }, // Fin (porcentaje calculado)
      ],
      {
        duration: duracion,
        iterations: Infinity,
        easing: "ease-out",
        fill: "forwards", // Mantener el estado final
      }
    )
    .finished.then(() => {
      progreso.style.strokeDashoffset = offsetFinal; // Asegurar el estado final
      progreso.style.strokeDasharray = `${circunferencia}`; // Necesario para el color
      progreso.style.stroke = progresoPorcentaje >= 1 ? "green" : "purple";
    });

  // Inicializar para el color
  progreso.style.strokeDasharray = `${circunferencia}`;
}

// Ejemplo de uso:
actualizarIndicadorAnimado(0, 100); // Inicializar en 0

// setTimeout(() => actualizarIndicadorAnimado(100, 100, 1000), 1000);
function showLoader(btn) {
  // show loader
  document.querySelector("#loader-container").style.visibility = "visible";
  

}
document.querySelector("#btn-mostrar-loader").addEventListener("click", (e) => {
  showLoader(e.target);
//   setTimeout(()=>{
// loaderContainer.style.visibility = "hidden";
//   }, 1000);
});
window.addEventListener("load", () => {
  // wait 2 seconds more
  setTimeout(() => {
    loaderContainer.style.visibility = "hidden";
    
  }, 3000);
  // hide loader
});