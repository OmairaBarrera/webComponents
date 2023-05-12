class MyCustomElement extends HTMLElement{
    constructor(){
        super();
        console.log("constructor");
    }
    connectedCallback(){
        console.log("hola");
    }
    disconnectedCallback(){
        console.log("Adios");
    }
}

customElements.define("my-custom-element", MyCustomElement);
document.querySelector("my-custom-element").remove();