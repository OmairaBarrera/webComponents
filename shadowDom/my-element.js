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
                <h2>Hola Mundo</h2>
                <div>
                    <p>texto</p>
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
                p{
                    color: yellow;
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