class myELement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    static get observedAttributes(){
        return ["title", "parrafo", "img"];
    }
    attributeChangedCallback(attr, oldVal, newVal){
        if(attr === "title"){
            this.title = newVal;
        }
        if(attr === "parrafo"){
            this.parrafo = newVal;
        }
        if(attr === "img"){
            this.img = newVal;
        }
    }
    getTemplate(){
        const template =  document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>${this.title}</h2>
                <div>
                    <p>${this.parrafo}</p>
                    <img src="${this.img}" />
                </div>
            </section>
            ${this.getStyle()}
        `
        return template;
    }
    getStyle(){
        return `
            <style>
                h2{
                    color: blue;
                }
            </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    //todo el contenido de la clase como el componente ya es un nodo que existe en el DOM
    connectedCallback(){
        this.render();
    }
}
//Se define la etiqueta, pasandole como parametros el nombre y de donde viene.
customElements.define('my-element', myELement)