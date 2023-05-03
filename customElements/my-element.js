class myELement extends HTMLElement {
    constructor(){
        super();
        this.h1 = document.createElement('h1');
        this.p = document.createElement('p');
    }
    connectedCallback(){
        this.h1.textContent = 'Custom Element'
        this.p.textContent = 'Bienvenidos'
        this.appendChild(this.h1)
        this.appendChild(this.p)
    }
}

//Se define la etiqueta, pasandole como parametros el nombre y de donde viene.
customElements.define('my-element', myELement)