// Operador de asignación -> = -> Nos permite asignar un valor a una variable.
let valorA = 5;
let valorB = 4;

valorA = 9;

// Operador de concatenación -> + -> Nos permite crear una cadena a partir de 2 o más expresiones donde al menos una sea una cadena.
// Una expresión puede ser: una variable, una cadena, una constante, una operación matemática.

// Operadores matemáticos
console.log(valorA + " + " + valorB + " = " + (valorA + valorB)); // Operador suma
console.log(valorA + " - " + valorB + " = " + (valorA - valorB)); // Operador resta
console.log(valorA + " * " + valorB + " = " + (valorA * valorB)); // Operador multiplicación
console.log(valorA + " / " + valorB + " = " + (valorA / valorB)); // Operador división

// Operación módulo -> % -> Nos permite calcular el residuo de una división.
console.log("5 % 1 = " + (5 % 1));
console.log("5 % 2 = " + (5 % 2));
console.log("5 % 3 = " + (5 % 3));
console.log("5 % 4 = " + (5 % 4));
console.log("5 % 5 = " + (5 % 5));

// Operadores combinados
let variable1 = 10;
console.log(variable1); // Imprime 10
variable1 += 5; // <- esto es igual a escribir variable1 = variable1 + 5;
console.log(variable1); // Imprime 15
variable1 -= 7; // <- esto es igual a escribir variable1 = variable1 - 7;
console.log(variable1); // Imprime 8
variable1 *= 2; // <- esto es igual a escribir variable1 = variable1 * 2;
console.log(variable1); // Imprime 16
