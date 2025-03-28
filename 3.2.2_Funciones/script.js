/*
    Una función es un bloque de código que tiene un nombre para que pueda
    ser llamado a partir de ese nombre.

    function <nombreFuncion>(){
        // Código asociado a la función.
    }

    El código asociado a una función se ejecuta hasta que la función es llamada.
*/

function saludo(){
    console.log("¡Hola, soy una función!");
}

saludo(); // Mandar a llamar una función.


/*
    Las funciones pueden recibir entradas conocidas como parámetros.
    
    function <nombreFuncion>(parametro1){
        // Código a ejecutar.
    }

    Los parámetros pueden tener cualquier tipo de dato asociado:
    - Cadenas
    - Números
    - Booleanos
    - null
    - undefined
    - arreglos
    - función
    - Objetos literales
*/

function saludarPersona(nombrePersona){
    console.log("¡Hola " + nombrePersona + ", yo soy una función!");
}

saludarPersona("Jaqueline");
saludarPersona("Eduardo");

let nombre1 = "Andrea";
saludarPersona(nombre1);

/*
    Una función puede regresar un valor. El término "regresar" significa
    calcular una salida.

    function <nombreFuncion>(param1, param2){
        // Código a ejecutar.
        return <valorARegresar>;
    }

    IMPORTANTE: Una vez que se ejecuta el return de una función, la función
    automáticamente termina, por lo que el resto del procesamiento no se ejecuta.

    Una función puede regresar cualquier tipo de dato de JS.

    Nota: Podemos tener una función sin un return. Si la función no tiene return,
    esta regresa un undefined.
*/

function sumar(a, b){
    return a + b; // Es el valor que regresa una función.
}

console.log(sumar(5, 4));

let resultadoSuma = sumar(7, 7);
console.log(resultadoSuma);

console.log(sumar(resultadoSuma, 6));


function sumarValoresArreglo(arreglo){
    if(arreglo.length > 1){
        return arreglo[0] + arreglo[1];
    }else if(arreglo.length == 1){
        return arreglo[0];
    }else{
        return 0;
    }

    console.log('Fin de la función'); // Este fragmento de código ya no se ejecuta ya que para este punto se ejecutó un return.
}

let pares1 = [2, 4, 6, 8];
console.log(sumarValoresArreglo(pares1));

//            0
let pares2 = [8];
console.log(sumarValoresArreglo(pares2)); // NaN -> NotANumber -> El valor no es un número.

let pares3 = [];
console.log(sumarValoresArreglo(pares3));

/*
    Funciones anidadas: Es posible declarar una función dentro de otra función.
*/

function sumarRestarMultiplicar(a, b){

    function sumar(a, b){
        return a + b;
    }

    function restar(a, b){
        return b - a;
    }

    function multiplicar(a, b){
        return a * b;
    }

    return sumar(a, b) + restar(a, b) + multiplicar(a, b);

}

console.log(sumarRestarMultiplicar(9, 2));

/*
    Scope (Alcance): Nos permite saber hasta dónde podemos utilizar una variable o una función.
*/


let nombreGato = "Tigrillo"; // Esta variable está en el alcance global.
// Una variable global es una variable que puede ser utilizar en cualquier parte del código.

function a(){
    // Bloque de código.
    let nombrePerro = "Cosa"; // Esta variable solo existe dentro de este bloque de código.
    console.log("Variable global dentro de una función: " + nombreGato);
    console.log("Variable local dentro de una función: " + nombrePerro);
}

a();

// console.log(nombrePerro); No puedo utilizar variables de un bloque de código interno a menos que sean globales.

if(true){
    // Bloque de código.
    console.log("Variable global dentro de un bloque de código de un if: " + nombreGato);

}

let i = 0;
while(i < 2){
    // Bloque de código.
    console.log("Variable global dentro de un bloque de código de un while: " + nombreGato);
    i++;
}

for(i = 0; i < 2; i++){
    // Bloque de código.
    let nombrePerro = "Mocka";
    console.log("Variable global dentro de un bloque de código de un for: " + nombreGato);
    console.log("Variable local dentro de un bloque de código de un for: " + nombrePerro);
    if(true){
        // Bloque de código.
        console.log("Variable global dentro de un bloque de código de un if dentro de un for: " + nombreGato);
        console.log("Variable local dentro de un bloque de código de un if dentro de un for: " + nombrePerro); // Se pueden utilizar variables de un bloque de código superior.
        nombrePerro = "La Mocka"; // Modificando la variable de un bloque de código padre.
    }
    console.log(nombrePerro);
    nombreGato = "Güero";
}

console.log(nombreGato);

console.log("-------------------------------------------------------------");
function crearGato(nuevoNombreGato){
    let nombreGato = nuevoNombreGato; // Si declaro una NUEVA variable local con el nombre de una variable que esté en un alcance superior, entonces se ignorará la variable del alcance superior.
    console.log("Dentro de la función antes del if: " + nombreGato);
    if(true){
        let nombreGato = "Zoro";
        console.log("Dentro del if dentro de la función: " + nombreGato);
    }
    console.log("Dentro de la función después del if: " + nombreGato);
}

crearGato("Bowie");
console.log("Fuera de la función: " + nombreGato);

