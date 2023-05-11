let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class myNav extends HTMLElement{
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
        console.log("MY NAV");
        e.preventDefault()
    }
    connectedCallback(){
        Promise.resolve(myNav.component()).then(html => {
            this.shadowRoot.innerHTML = html;
            this.Mynav = this.shadowRoot.querySelector('button');
            this.Mynav.addEventListener('click', this.handleEvent.bind(this))
        })
    }
}

customElements.define(name, myNav);