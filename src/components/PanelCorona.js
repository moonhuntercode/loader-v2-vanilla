import Corona from "../imgs/corona-sangrienta-transparente.png";
export class PanelCorona extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      /*html*/
      `
      <section id="panel-container">
      <img id="corona-1" src="${Corona}" alt="Corona">
      </section>      
        `;
  }
}
