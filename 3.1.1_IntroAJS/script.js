console.log("¡Hola mundo!");

// Variables: Es un espacio dentro de la computadora que nos permite guardar datos.
/* Receta mágica para crear una variable: 
    Especificador de variable + nombre de la variable = valor
*/

/*
    Especificadores de variables: var, let, const
*/

// String (cadenas): Nos permite representar texto
// Para crearlas podemos utilizar comillas simples (''), comillas dobles ("") o backticks (``).

let nombre = "Malinali"; // Declarar una variable llamada nombre y le asigno el valor Malinali.
console.log(nombre);

nombre = "Daniel"; // Reasignando el valor.
console.log(nombre);

// Number (números): Nos permite representar números.
// A diferencia de las cadenas, este tipo de dato NO requiere de ningún tipo de comillas.
let edad = 26; // Entero
let estatura = 1.7; // Número con punto decimal
let gradosCentigrados = -10.2; // Negativos

console.log(edad);
console.log(estatura);
console.log(gradosCentigrados);

// Concatenación: Es una operación que nos permite crear una cadena a partir de diferentes valores.
let mensajeFinal = nombre + " tiene " + edad + " años.";
console.log(mensajeFinal);

// const = constante
const GRAVEDAD = 9.81;
const PI = 3.141592;

// GRAVEDAD = 10; <- No podemos reasignar el valor de una constante.

// Boolean (Booleano): Nos permite representar que algo es verdadero o falso, prendido o apagado, 1 o 0.
// true | false
let esMayorDeEdad = true;
let tieneTerceraEdad = false;

// Palabra reservada: Es una palabra especial en el lenguaje de programación que NO puede usarse como
//  nombre de variables, funciones, clases.

alert(mensajeFinal);
let nombreMascota = prompt("Escribe el nombre de tu mascota"); // SIEMPRE convierte el valor a una cadena.
alert("El nombre de la mascota es: " + nombreMascota);

// Comentarios JS <- Los comentarios es texto dentro del código fuente que no se ejecuta.
// Comentarios de una línea: Se representan con 2 diagonales -> //
// Comentarios multilínea: Se representan con /* */

/*
    Este
    es
    un
    comentario
    multilinea
*/

// Ejercicio 1:
// Leer los datos de una mascota e imprimir un mensaje que incluya todos los datos leídos.
// Utilizar al menos 1 vez cada tipo de dato (String, Number y Boolean).

// Ejercicio 2:
/*
    Crear un cuestionario de 10 preguntas. Mostrar cada pregunta una por una y al final mostrar
    la respectiva pregunta con la respuesta ingresada por el usuario.
    Que al menos 2 preguntas sean de opción múltiple.
    Que al menos 2 preguntas sean respuesta de valores numéricos.
    Cada pregunta debe tener la respuesta en los comentarios del código.
    Agregar cada respuesta correcta a una variable.
*/