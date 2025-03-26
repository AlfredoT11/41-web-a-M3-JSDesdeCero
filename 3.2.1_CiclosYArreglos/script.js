let contador = 1;

// while -> Es una estructura de control que nos permite repetir una serie de 
// instrucciones.
/*
    while (condicion){
        // Código a ejecutar
    }

Nota: La condición SIEMPRE se ejecuta primero.

Generalmente utilizamos un ciclo while cuando no sabemos con exactitud
en qué momento se dejará de cumplir la condición.
*/
console.log("Ejecución de un while");
while(contador <= 10){
    console.log(contador);
    contador++;
}

// contador = 10;

// do-while -> Es una estructura muy parecida al while, sin embargo,
// aquí el código se ejecuta SIEMPRE al menos una vez.
/*
    do{
        // Código a ejecutar.
    }while(condicion);
*/
console.log("Ejecución de un do-while");
do{
    console.log("Soy el código de un do-while");
}while(contador < 10);

/*

for(inialización; condición; operación de acumulación){
    // Bloque a ejecutar.
}

¿Será posible inicializar más de una variable y modificar más de una variable
en la acumulación?

Generalmente utilizamos un ciclo for cuando estamos seguros del número
de iteraciones a ejecutar
*/
console.log("Ejecución de un for");
for(let i = 0; i <= 20; i += 2){
    console.log(i);
}

let nombre = "Abril";
let nombre2 = "Alexis";
let nombre3 = "Luis";
let nombre4 = "Jeshua";


// let alumnosTona = []; // Arreglo vacío.
// let alumnosTona = Array(); // Arreglo vacío.
//let alumnosTona = Array(5); // Un arreglo con 5 posiciones. Estas posiciones NO son finales.
let alumnosTona = ["Abril", "Alexis", "Luis", "Jeshua", "Jaqueline", "Victor"];

console.log(typeof alumnosTona); // typeof es un operador que nos permite conocer el tipo de dato de un valor o una variable.
console.log(alumnosTona);

// Índice de un arreglo -> Es la posición de un valor como si fuera una coordenada.
/*
    El índice empieza a contarse desde 0.
      0        1         2       3         4            5
    ["Abril", "Alexis", "Luis", "Jeshua", "Jaqueline", "Victor"]

*/

console.log(alumnosTona[1]); // Lectura de un valor de un arreglo.
alumnosTona[1] = "Mendez"; // Modificando un valor del arreglo.
console.log(alumnosTona[1]);

// console.log(alumnosTona[-1]); NO podemos utilizar un valor negativo como índice.

// En JS una arreglo puede tener cualquier tipo de dato.
// No está restringido a que todos los datos de este sean del mismo tipo.
let arregloTutifruti = ["Soy una cadena", 1.5, 2, "Soy otra cadena", null, undefined, [1, 2, 3, [1, 2, 3]], "Una última cadena"];

// Métodos (acciones) de los arreglos.
let frutas = [];
frutas.push('Naranja'); // Agrega elementos al final del arreglo.
console.log(frutas);
frutas.push('Manzana');
console.log(frutas);

frutas.unshift('Uva'); // Agregar elementos al inicio del arreglo.
console.log(frutas);

frutas.push('Zanahoria');
frutas.unshift('Cebolla');
console.log(frutas);

frutas.pop(); // Elimina el último elemento del arreglo.
console.log(frutas);

frutas.shift(); // Elimina el primer elemento del arreglo.
console.log(frutas);


// ¿Cómo eliminar un valor que no está al inicio ni al final?
frutas.splice(1, 1, 'Fresa', 'Mango'); // Nos permite eliminar y agregar nuevos valores.
console.log(frutas);

// ¿Cómo acceder a más de un elemento de un arreglo?
//     0        1        2          3
// ['Uva', 'Fresa', 'Mango', 'Manzana']
console.log(frutas.slice(1, 3)); // Nos permite acceder a un subarreglo.
                 
//                  0                                                         16
let numerosAzar = [1, 3, 4, 5, 7, 8, 9, 10, 11, 15, 64, 100, 87, 71, 65, 89, 10]; // 17 valores
// numerosPares.length; // Me permite conocer cuántos valores hay en el arreglo.

let pares = [];
let impares = [];

// Para cada valor del arreglo, mostrar un mensaje indicando si el número es par o impar.
// % -> El módulo nos permitirá saber si el valor es par o impar.
for(let i = 0; i < numerosAzar.length; i++){
    if(numerosAzar[i] % 2 == 0){
        console.log(numerosAzar[i] + " es PAR");
        pares.push(numerosAzar[i]);
    }else{
        console.log(numerosAzar[i] + " es IMPAR");
        impares.push(numerosAzar[i]);
    }
}

console.log("Pares: ");
console.log(pares);

console.log("Impares: ");
console.log(impares);

// Datos para el ejercicio: 
// Objetos -> Objeto literal -> Diccionario
// Estructura clave-valor.
let fruta1 = {
    nombre: "Naranja",
    tipo: "Cítrico"
}

let fruta2 = {
    nombre: "Manzana",
    tipo: "Pomácea"
}


let frutasObjetos = [fruta1, fruta2];
console.log(frutasObjetos[0].tipo); // Accediendo a las propiedades de un objeto literal.

let frutasConTipo = [
    { nombre: "Naranja", tipo: "Cítrico" },
    { nombre: "Manzana", tipo: "Pomácea" },
    { nombre: "Plátano", tipo: "Tropical" },
    { nombre: "Uva", tipo: "Baya" },
    { nombre: "Fresa", tipo: "Baya" },
    { nombre: "Piña", tipo: "Tropical" },
    { nombre: "Mango", tipo: "Tropical" },
    { nombre: "Cereza", tipo: "Drupa" },
    { nombre: "Pera", tipo: "Pomácea" },
    { nombre: "Sandía", tipo: "Cucurbitácea" },
    { nombre: "Melón", tipo: "Cucurbitácea" },
    { nombre: "Durazno", tipo: "Drupa" },
    { nombre: "Coco", tipo: "Drupa" },
    { nombre: "Kiwi", tipo: "Baya" },
    { nombre: "Limón", tipo: "Cítrico" }
];


let citricos;
let pomaceas;
let tropicales;
let drupas;
let cucurbitaceas;