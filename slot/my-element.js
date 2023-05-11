/* ShadowDOM: 

*/
class myELement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    getTemplate(){
        const template =  document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>
                    <slot></slot>
                </h2>
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