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

// Operador incremento
let variable2 = 0;
console.log(variable2);
variable2++; // esto es igual a escribir variable2 += 1;
console.log(variable2);
variable2++;
console.log(variable2);

// Operador decremento
let variable3 = 5;
console.log(variable3);
variable3--; // esto es igual a escribir variable3 -= 1;
console.log(variable3);
variable3--;
console.log(variable3);

// Operadores de comparación
console.log("5 == 5 -> " + (5 == 5));
console.log("5 == '5' -> " + (5 == '5')); // El opereador de igual (==) revisa únicamente el valor.
console.log("5 === '5' -> " + (5 === '5')); // El operador de igualdad estricto (===) revisa tanto el valor como el tipo de dato.

console.log("18 != 17 -> " + (18 != 17)); // true
console.log("18 != '18' -> " + (18 != '18')); // false -> El número 18 es igual que la cadena '18'
console.log("18 !== '18' -> " + (18 !== '18')); // true -> El número 18 es estrictamente diferente que la cadena '18'.



let variableMayor = 24;
let variableMenor = -1;
console.log(variableMayor + " > " + variableMenor + " -> " + (variableMayor > variableMenor));
console.log(variableMayor + " < " + variableMenor + " -> " + (variableMayor < variableMenor));

let variableIgual = 24;
console.log(variableMayor + " >= " + variableIgual + " -> " + (variableMayor >= variableIgual));
console.log(variableMayor + " <= " + variableIgual + " -> " + (variableMayor <= variableIgual));



