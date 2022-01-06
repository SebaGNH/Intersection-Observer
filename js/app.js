const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");


const cargarImagen = () =>{
    console.log("Ejecuta");
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null, /*  <-- Null hace referencia al viewport */
    rootMargin: '0px 0px 0px 0px',/*  <-- Margen en el que se ejecutará el código */
    threshold: 1.0, /*  <-- Ejecuta solo cuando esté toda la imagen en el viewport, va del 0.0 al 1.0, es el tamaño al ejecutarse */


});

observador.observe(imagen1); /*  <-- le ponemos la ruta de la imagen */