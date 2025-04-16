let divContenedor = document.getElementById("contenedor");

console.log(divContenedor.innerHTML);
console.log(divContenedor.textContent);

// Arreglo: Colección (conjunto) de datos.
/*
    Su principal uso es que nos permiten guardar más de un valor en una sola variable
    ¿Cómo crear un arreglo?
    
    let arreglo = []; Arreglo vacío.
    let arreglo = [13, 215, "cadena", true, [], {}, () => {}];
    let arreglo = Array();
*/
//             0   1   2  3   4   5   6    7
let edades = [25, 10, 34, 1, 85, 98, 101, 18]; // Este arreglo tiene 8 elementos.

console.log(`El primer elemento es: ${edades[0]}`);
console.log(`El último elemento es: ${edades[7]}`);

edades.push(24); // push() permite agregar elementos al final del arreglo.
edades.push(24);
edades.push(24);
edades.push(24);
edades.push(24);
edades.unshift(0); // unshift() permite agregar elementos al inicio del arreglo.
//edades.length <- Nos regresa el número de elementos del arreglo.
// [25, 10, 34, 1, 85, 98, 101, 18, 24]
console.log(`El último elemento es: ${edades[edades.length - 1]}`);

// edades[-1]; <- Esto no JS no se puede regresar.

edades.pop(); // Eliminar el último elemento.
edades.shift(); // Eliminar el primer elemento.

// También tenemos el método splice() que permite modificar (eliminar y/o agregar) elemenos en una sola operación.
let sumaEdades = 0;
for(let i = 0; i < edades.length; i++){
    sumaEdades += edades[i];
}

console.log(`El promedio de edades es: ${sumaEdades/edades.length}`);

/*
    DOM es un modelo que representa una página HTML.
    Este modelo puede ser accedido desde JS.
    Incluye funciones que nos permiten aplicar las siguientes operaciones a los elementos de HTML:

        CREAR
        ELIMINAR
        MODIFICAR
        LEER

*/

/*
    LEER
*/
document.getElementById("contenedor2"); // Obtener el elemento HTML con el id especificado.
document.getElementsByTagName("div"); // Obtener TODOS los elementos HTML con el nombre de etiqueta especificado.
document.getElementsByClassName("yellow-text"); // Obtener TODOS los elementos HTML que tengan la clase especificada.

document.querySelector(".yellow-text > span"); // El primer elemento que cumpla con el query.
document.querySelectorAll(".yellow-text > span"); // TODOS los elementos que cumplan con el query.

/*
    CREAR
*/
let nuevoTituloH2 = document.createElement("h2"); // Crear un nuevo elemento con la etiqueta especificada.
//nuevoTituloH2.innerHTML = "<span>Hola</span>"; // Esta línea agrega el valor y lo convierte a HTML.
nuevoTituloH2.innerText = "<span>Hola</span>"; // Esta línea agrega el valor como texto.
document.getElementById("contenedor").appendChild(nuevoTituloH2); // Agregar el elemento al final de otro elemento.

/*
    MODIFICAR
*/
let contenedorDiv = document.getElementById("contenedor");
console.log(contenedorDiv.classList);
contenedorDiv.classList.add("background-green");

/*
    ELIMINAR
*/
//contenedorDiv.removeChild(nuevoTituloH2); // removeChild() elimina un elemento hijo de otro elemento.
//contenedorDiv.remove(); // remove() hace que un elemento se elimine asimismo.

/*
    Funciones
    Un bloque de código reutilizable y que además es dinámico en cuanto a sus entradas.
*/
let edades1 = [12, 13, 14];
let edades2 = [21, 23];
let edades3 = [32, 33, 34, 25];
let edades4 = [];

function calcularEdadPromedio(edades){
    // Bloque de código a ejecutar.
    if(edades.length == 0){
        console.log(`No hay edades`);
        return 0;
    }

    let sumaEdades = 0;
    for(let i = 0; i < edades.length; i++){
        sumaEdades += edades[i];
    }
    console.log(`El promedio de edades es: ${sumaEdades/edades.length}`);
    return sumaEdades/edades.length;
}

let promedio1 = calcularEdadPromedio(edades1);
console.log(promedio1);
calcularEdadPromedio(edades2);
calcularEdadPromedio(edades3);
calcularEdadPromedio(edades4);



