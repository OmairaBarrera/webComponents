let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class mySeleccion extends HTMLElement{
    static async component(){
        return await (await fetch(pathName.replace('.js','.html'))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    handleEvent(e){
        (e.type === 'click') ? this.enviarWorker(e) : undefined;
    }
    enviarWorker(e){
        console.log("MY SELECCION");
        e.preventDefault()
    }
    connectedCallback(){
        Promise.resolve(mySeleccion.component()).then(html => {
            this.shadowRoot.innerHTML = html;
            this.Myseleccion = this.shadowRoot.querySelector('button');
            this.Myseleccion.addEventListener('click', this.handleEvent.bind(this))
        })
    }
}

customElements.define(name, mySeleccion);