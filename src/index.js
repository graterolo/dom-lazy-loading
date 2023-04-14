import { registerImage, counterLoad, clearAll } from "./lazy";  // importe el metodo y lo usare al agregar una img

//console.log('Happy hacking :)')

/* esto es lo que voy a crear
  <div class="p-4">
            <img 
               class="mx-auto"   
              width="320" 
              src="https://randomfox.ca/images/2.jpg" 
              alt=""
            />
          </div> 
*/
// vamos a generar un random para las imagenes a mostrar

const minimun = 1;  // minimo en la pagina de imagenes
const maximun = 123; // numero maximo de imagenes en la pag de fotos
const random = () => Math.floor(Math.random() * (maximun - minimun)) + minimun

const createImageNode = () => {
    
    const container = document.createElement('div');
    container.className = "bg-gray-300";
    container.style.minHeight = "200px";
    container.style.minWidth = "200px";
    container.style.display = "inline-block";

    const imagen = document.createElement('img')
    imagen.className = "mx-auto";
    //imagen.minHeight = "225px";
    imagen.width = '320';
    imagen.height = '320';
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    
    // ahora agregamos la imagen  al container
    container.appendChild(imagen);
    return container;
};

// guardo en una constante el div donde van las imagenes
const mountNode = document.getElementById('images');

const addButton = document.getElementById('bimg');
const clearButton = document.getElementById('cimg');


// vamos a crear una accion donde cada vez que se haga click cree una nva img
const addImage = () => {
    const newImage = createImageNode();
    // ahora agrego la imagen al contenedor images
    mountNode.append(newImage);
    registerImage(newImage); // la registro en el lazy loading y que  se comience a escuchar
    counterLoad();
};



// agregamos la accion al boton
addButton.addEventListener('click', addImage);

clearButton.addEventListener('click', clearAll);