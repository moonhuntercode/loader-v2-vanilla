// src/components/pagina2.js
// css import
import "./pagina2.css";
// test

export class Pagina2 extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = /*html*/ `
            <div>

                 <div class="step-indicator">
        <svg class="progress-ring" width="100" height="100">
            <circle class="progress-ring-background" cx="50" cy="50" r="42" />
            <circle class="progress-ring-foreground" cx="50" cy="50" r="42" />
        </svg>
        <div class="step-count">0</div>
        <div class="step-goal">9406</div>
    </div>
            </div>
        `;
  }
}
