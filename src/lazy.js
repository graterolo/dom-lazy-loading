// primero vamos a crear una funcion que va a recibir una imagen y le 
// dira al intersection observer que observe esta imagen
// estas son las imagenes que llamamos en el index y queremos que las 
// escuche
// ahora vamos a instanciar esta web api este recibe una funcion en 
// donde vamos a especificar que hacer por cada imagen, el nos va a pasar
// todas las entradas que esta escuchando 
// ojo quiere ver las que esten en ese momento visibles en el viewpor
// si se mueve la pantalla hacia abajo ya no se ve la de arriba
// entonces los elementos que me interesan son los que se estan 
// intersectando en ese momento
// 2do vamos a definir una accion por cada uno 
// vamos a crear esa funcion de la accion y la ponemos de primero
// la funcion isIntersection lo que hara sera recibir un entry que 
// recibe de una lista e itera sobre el entry que recibe que hace parte
// de la web api del intersection observer tiene una propiedad 
// isIntersecting que sera true cuando este dentro del viewpor
// tambien podriamos hacer cosas como que si esta a 200px del viewpor haz esto

// luego que ya hemos filtrado llamando a la funcion isIntersecting 
// viene la accion (ojo es esta parte .forEach(accion))
// creamos la funcion de la accion 

// variables globales para mensajes de consola
let countLoad = 0;
let countAdd = 0;

const isIntersecting = (entry) => {
    return entry.isIntersecting;  // es true si esta dentro del viewpor
};

/** Afortunadamente la función observer que instanciamos tiene en cada 
 * momento el nodo que esta observando, asi que la recibimos en esta 
 * función accion (entry), lo guardamos en la constante nodo con la 
 * propiedad target que nos identifica quien es y le pedimos que deje 
 * de observar en ese momento a ese nodo específicamente que ya esta 
 * cargado */
const loadImage = (entry) => {
    const container = entry.target; // container = DIV
    const imagen = container.firstChild; // dentro de sus prop, esta la inf
    const url = imagen.dataset.src; 
    // cargar ahora la imagen con el valor valido de la url
    imagen.src = url;
    //debugger;
    //console.log(container.nodeName);
    countLoad++; // incremento contador de lectura de la img
    counterLoad();  // llamo a la funcion que muestra el msj
    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
});
// tengo instanciado al IntersectionObserver en esta const observer
// ahora lo usare, pero como lo quiero es en el index lo exporto
// y en el inicio del index.js lo importo
export const registerImage = (imagen) => {
    // Intersection Observador -> observer(imagen)
    observer.observe(imagen);
    countAdd++; //incremento contador que muestra img
};

export const clearAll = () => {
    const mountNode = document.getElementById('images');
    while(mountNode.hasChildNodes())
       mountNode.removeChild(mountNode.firstChild);
       countLoad = 0;
       countAdd = 0;	
   };
export const counterLoad = () => {
    const mesage = `😮 Las imagenes agregadas son:${countAdd} 
😁 Las imagenes cargadas son:${countLoad}
---------------------------------------------`;
    console.log(mesage);
}