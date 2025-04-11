// DOM: Document Object Model
/*
    Model -> Representación de algo.
    DOM es la representación de una página HTML para JS.
    Esta representación es a través de una estructura conocida como árbol.
    El árbol se compone de elementos conocidos como 'nodos', los cuales representan
    un elemento de HTML.

                            <html>
                <head>                      <body>
        <meta>  <title> <link>          <h2>    <p>     <ul>
                                                    <li>    <li>    <li>    <li>
*/

function agregarTarea(){

    // Accediendo al elemento input.
    let agregarTareaInput = document.getElementById("agregarTareaInput");

    if(agregarTareaInput.value === ""){
        //alert("El campo de tarea está vacío. Por favor agrega una tarea");
        document.getElementById("mensajesAplicacion").innerText = "El campo de tarea está vacío. Por favor agrega una tarea"
        return;
    }

    // Accediendo a la lista <ul>
    let listaTareasUl = document.getElementById("listaTareasUl");

    // Creando un nuevo elemento.
    let nuevoLi = document.createElement("li");
    // Crear el párrafo
    let parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerText = agregarTareaInput.value; // El atributo value me permite acceder a lo que está escrito en el input.
    nuevoLi.appendChild(parrafoNuevo);

    // Crear un botón nuevo
    let botonEliminar = document.createElement("button");
    botonEliminar.innerText = "Eliminar";

    botonEliminar.addEventListener("click", () => {
        //listaTareasUl.removeChild(nuevoLi); // removeChild() elimina un hijo de un elemento padre.
        nuevoLi.remove(); // remove() se elimina asimismo.
    });

    parrafoNuevo.appendChild(botonEliminar);

    // Una vez creado el elemento, se debe agregar a otro elemento.
    listaTareasUl.appendChild(nuevoLi);

    agregarTareaInput.value = "";
    document.getElementById("mensajesAplicacion").innerText = "";

    // Para eliminar un elemento podemos utilizar removeChild aplicado al papá de ese elemento.
    let mensajeErrorH2 = document.getElementById("mensajeError");
    document.body.removeChild(mensajeErrorH2); // En este caso el elemento que quiero borrar es hijo del body.
    // document.body es un atajo para acceder al elemento <body>
}

let agregarTareaBtn = document.getElementById("agregarTareaBtn"); // Buscando un elemento por su id.
//agregarTareaBtn.onclick = agregarTarea; // Modificando la propiedad de un evento para agregarle una función.


/*
    El método addEventListener le "enseñan" a un elemento a escuchar.
    El método recibe 2 parámetros:
    - El evento a escuchar. El evento es un String.
    - La función a ejecutar al escuchar el evento.
*/
agregarTareaBtn.addEventListener("click", agregarTarea); 

// NOTA: Cuando trabajamos con addEventListener, los eventos NO deben llevar la palabra "on" al inicio.


// Función -> Un bloque de código reutilizable.
function suma(a, b){
    return a + b;
}
suma(5, 1);

// Funciones anónimas: Funciones que no tienen nombre.
// En JS se les conoce como funciones flecha.
// La idea de estas funciones es que solamente se utilicen una vez dentro de nuestro código.
/*
    (param1, param2, param3, ..., paramN) => {
        // Código a ejecutar.
    }
*/

let funcionSuma = (a, b) => {
    return a + b;
}
funcionSuma(5, 1);

