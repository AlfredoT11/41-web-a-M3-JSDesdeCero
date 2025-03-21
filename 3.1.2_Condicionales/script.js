// Estructura de control if (Si... entonces...).
/*
    La estructura if nos permite tomar decisiones para ejecutar un pedazo de código.
    
    if(expresionLógica){
        Código a ejecutar.
        Este código a ejecutar puede ser más de una línea de código.
    }

    En caso de que expresionLógica sea true, entonces el Código a ejecutar sí se ejecuta.
    En caso de que expresionLógica sea false, entonces el Código a ejecutar no se ejecuta.
    
    El código dentro de unas llaves {} se le conoce como "bloque de código".

    if(expresiónLógica){
        Código a ejecutar si expresiónLógica es true.
    }else{
        Código a ejecutar si expresiónLógica es false.
    }

    // Nota: El else es completamente opcional.

    if(expresionLógica1){
        Código a ejecutar si expresiónLógica1 es true.
    }else if(expresionLógica2){
        Código a ejecutar si expresiónLógica2 es true.
    }else{
        Código a ejecutar si ninguna expresión lógica previa es true.
    }

*/
let edad = 19;
let traeINE = true;
let peliculaDeseada = "Wolverine";

/*
    Truco: Cuando comparamos booleanos NO es necesario utilizar el operador
    de igualdad
*/

if(edad >= 18 && traeINE){
    console.log("El usuario sí puede entrar al cine.");
    if(peliculaDeseada == "Spiderman"){
        console.log("El usuario va a ver su película favorita.");
    }else if(peliculaDeseada == "Wolverine"){
        console.log("El usuario va a ver una película que le gusta mucho.");
    }else if(peliculaDeseada == "Guardianes de la Galaxia"){
        console.log("El usuario va a ver una película que lo hace reir.");
    }else{
        console.log("El usuario ya no quiere ver nada.");
    }
}

