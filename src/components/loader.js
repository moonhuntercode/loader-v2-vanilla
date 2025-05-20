// src/components/loader.js
import Corona from "../imgs/corona-sangrienta-transparente.png";
import './loader.css'
export class Loader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      /*html*/
      `
        <section id="loader-container">
        <img src="${Corona}" alt="corona">
        <h1>Cargando recursos...</h1>
        
        <progress id="loader-progress" value="0" max="100">0%</progress>
        
        </section>
        `;
        this.progressBar=this.querySelector("#loader-progress");
  }
}
export function activarProgressInLoader(progressElement) {
  // añadir animacion al progress
  progressElement.classList.add("progress-animation");
  progressElement.value = 0;
    let interval = setInterval(() => {
        if (progressElement.value >= 100) {
        clearInterval(interval);
        progressElement.classList.remove("progress-animation");
        } else {
        progressElement.value += 10;
        }
    }, 700);
    
}
