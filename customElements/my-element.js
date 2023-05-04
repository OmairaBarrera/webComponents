/*Opcion 1
    Creamos los elementos y agregamos con appendChild
Opcion 2
    Creamos un template y agregamos al DOM con appendChild
*/

const template = document.createElement('div');
template.innerHTML = `
    <style>
        h1{
            color: red;
        }
        p{
            color: blue;
        }
    </style>
    <h1> Custom 2</h1>
    <p> Etiqueta de parrafo 2</p>
`;

class myELement extends HTMLElement {
    constructor(){
        super();
        this.h1 = document.createElement('h1');
        this.p = document.createElement('p');
    }
    //todo el contenido de la clase como el componente ya es un nodo que existe en el DOM
    connectedCallback(){
        this.h1.textContent = 'Custom Element'
        this.p.textContent = 'Bienvenidos'
        this.appendChild(this.h1)
        this.appendChild(this.p)
        this.appendChild(template);
    }
}
//Se define la etiqueta, pasandole como parametros el nombre y de donde viene.
customElements.define('my-element', myELement)

