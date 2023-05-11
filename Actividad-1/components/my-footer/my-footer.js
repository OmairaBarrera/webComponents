let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class myFooter extends HTMLElement{
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
        console.log("MY FOOTER");
        e.preventDefault()
    }
    connectedCallback(){
        Promise.resolve(myFooter.component()).then(html => {
            this.shadowRoot.innerHTML = html;
            this.Myfooter = this.shadowRoot.querySelector('button');
            this.Myfooter.addEventListener('click', this.handleEvent.bind(this))
        })
    }
}

customElements.define(name, myFooter);