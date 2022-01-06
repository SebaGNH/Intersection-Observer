const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");


const cargarImagen = (entradas, observador) =>{
    //console.log(entradas); /* arreglo <-- contiene info de los elementos que está vigilando*/
    //console.log(observador);
    entradas.forEach((entrada)=>{ /*  <-- Identificamos cada entrada */
        if (entrada.isIntersecting) { /*  <-- si la imagen está en el viewport */
            //console.log("La imagen está en el viewport completamente");
            entrada.target.classList.add("visible");
        }else{
            //entrada.target.classList.remove("visible");
        }
    })
}

const observador = new IntersectionObserver(cargarImagen, { /*  <-- Se ejecuta cada vez que una imagen entre y salga */
    root: null, /*  <-- Null hace referencia al viewport */
    rootMargin: '0px 0px 0px 0px',/*  <-- Margen en el que se ejecutará el código */
    threshold: 1.0, /*  <-- Ejecuta solo cuando esté toda la imagen en el viewport, va del 0.0 al 1.0, es el tamaño al ejecutarse */


});

observador.observe(imagen1); /*  <-- le ponemos la ruta de la imagen */
observador.observe(imagen2);