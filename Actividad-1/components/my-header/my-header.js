let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class myHeader extends HTMLElement{
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
        console.log("MY HEADER");
        e.preventDefault()
    }
    connectedCallback(){
        Promise.resolve(myHeader.component()).then(html => {
            this.shadowRoot.innerHTML = html;
            this.Myheader = this.shadowRoot.querySelector('button');
            this.Myheader.addEventListener('click', this.handleEvent.bind(this))
        })
    }
}

customElements.define(name, myHeader);