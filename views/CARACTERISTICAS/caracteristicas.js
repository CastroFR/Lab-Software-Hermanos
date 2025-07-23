console.log("Holiwis");

//Obtenemos los elementos del Frontend

let elementoDOM = document.getElementById('Subtitulo');

let funcionalidadDOM = document.getElementById('Funcionalidad1');

const dataDOM = document.getElementById('Funcionalidad2');

let cambioDOM = document.getElementById('Funcionalidad3');


//Mostramos cambios en la Pagina Web

/*

innerHTML, Cambiamos el subtitulo de nuestra pagina web

*/

elementoDOM.innerHTML = "<h2>Caracteristicas Principales</h2>";


/*

addEventListener, Muestra un alert al hacer click en la primera funcionalidad
la primera funcionalidad es una etiqueta a en el HTML

*/
funcionalidadDOM.addEventListener('click', () => {
    alert('Gracias por usar este sitio');

})

/*

addEventListener, Muestra un prompt al hacer click en la segunda funcionalidad
El prompt solicita que ingresemos el nombre
El nombre ingresado lo utilizamos para mostrar un saludo por consola

*/

dataDOM.addEventListener('click', () => {
    let dato = prompt("Ingresa tu nombre: ")
    console.log(`Bienvenido a este sitio ${dato}`);

})

/*

addEventListener, Hace un cambio de letra en la vita de nuestra pagina web
La letra modificada solo afecta a la tercera funcionalidad

*/

cambioDOM.addEventListener('click', () => {
    
    cambioDOM.style.fontFamily = "Roboto";

})