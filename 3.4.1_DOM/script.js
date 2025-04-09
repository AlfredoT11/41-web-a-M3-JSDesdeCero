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
    nuevoLi.innerText = agregarTareaInput.value; // El atributo value me permite acceder a lo que está escrito en el input.

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

