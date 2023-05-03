let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class mySeleccion extends HTMLElement{
    static async component(){
        return await (await fetch(pathName.replace('.js','.html'))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        Promise.resolve(mySeleccion.component()).then(html => {
            this.shadowRoot.innerHTML = html;
        })
        console.log('Etiqueta renderizada');
    }
}

customElements.define(name, mySeleccion);