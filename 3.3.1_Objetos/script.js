/*
    Objeto literal: Es un tipo de dato que nos permite guardar
    más de un valor dentro de una variable y acceder a los valores a través
    de llaves.

    [let | const] <nombreVariable> = {
        <nombreLlave1>: <valor>,
        <nombreLlave2>: <valor>,
        ...
        <nombreLlaveN>: <valor>
    }

    <valor> puede ser cualquier tipo de dato (String, Number, Boolean, otros objetos, arreglos, funciones)

*/

let mascota1 = {
    nombre: "Tigrillo",
    tipo: "Gato",
    edad: 8,
    colorDePelaje: "Naranja",
    estaEsterilizado: true,
    humano: { // Objeto anidado
        nombre: "Malinali",
        edad: 25
    }
}


// Operaciones de lectura.
console.log(mascota1.nombre); // Accediendo a una propiedad.
console.log(mascota1["tipo"]); // Otra manera de acceder a las propiedades.

console.log(mascota1.humano.nombre);

// Modificar datos.
// Únicamente tienen que utilizar el operador de asignación.
console.log("La edad de " + mascota1.nombre + " es: " + mascota1.edad);
//mascota1.edad = mascota1.edad + 1;
mascota1.edad += 1;
//mascota1.edad++;
//mascota1.edad = 9;
console.log("Le nueva edad de " + mascota1.nombre + " es: " + mascota1.edad);

// Agregando una nueva propiedad.
mascota1.colorDeOjos = "Verdes";
console.log(mascota1.colorDeOjos);

/*
    Nosotros podemo crear una estructura predefinada de un objeto, esta estructura se crea a través de
    algo conocido como Constructor.
    Un una función Constructor es una función especial que nos permite definir la estructura de un objeto y
    asociar valores a este.
    Cuando mandamos a llamar a un constructor debemos utilizar la palabra reservada new.
    Esta palabra reserva le indica a JS que tiene que reservar memoria para guardar información.

    Atributos -> Son valores que nos permiten definir una entidad. (También conocidas como características)

    Métodos -> Son las acciones que realiza una entidad. Estas acciones las vamos a representar con funciones.
*/

function Humano(nombre, edad){
    this.nombre = nombre;
    this.edad = edad
    this.saludar = function (){
        console.log("Hola, mi nombre es: " + this.nombre);
    }
}

function Mascota(tipo, nuevoNombre, edad, colorDePelaje, estaEsterilizado, humano){
    this.nombre = nuevoNombre;
    this.tipo = tipo;
    this.edad = edad;
    this.colorDePelaje = colorDePelaje;
    this.estaEsterilizado = estaEsterilizado;
    this.humano = humano;
}

let humanoNuevo = new Humano("Juan", 32); // Se está creando un nuevo objeto.
console.log(humanoNuevo.nombre);
console.log(humanoNuevo.edad);
humanoNuevo.edad = 35;
console.log(humanoNuevo.edad);

humanoNuevo.saludar();

let humanaNueva = new Humano("María", 25);
humanaNueva.saludar();

let ninio1 = new Humano("Pedrito", 8);
ninio1.saludar();

let mascotaNueva = new Mascota("Perro", "Churrumino", 3, "Café", true, humanoNuevo);
console.log(mascotaNueva.nombre + " tiene " + mascotaNueva.edad + " años y su humano se llama: " + mascotaNueva.humano.nombre );

console.table(mascotaNueva);
console.log(mascotaNueva);

let personas = [];
for(let i = 0; i < 4; i++){
    personas.push(new Humano(String(i), i + 1));
}

for(let i = 0; i < personas.length; i++){
    console.table(personas[i]);
}

// Destructuración -> Nos permite crear nuevas variables con los valores de un objeto o un arreglo.
/*
let nombre = humanoNuevo.nombre;
let edad = humanoNuevo.edad;
*/

let { nombre, edad } = humanoNuevo; // Las variables a destructurar SÍ O SÍ tienen que tener el mismo nombre de las propiedades del objeto.

console.log(nombre);
console.log(edad);

// Bucle -> For o While
/*
    for(let i = 0; i < n; i++){

    }

    for... in
    Nos permite iterar sobre las llaves de un objeto literal.
    for([let | const] <nombreDeVariableInterna> in <objeto>){

    }

    for... of
    Este bucle nos permite iterar sobre los valores de un iterable.
    Los objetos NO son iterables.
     0           4
    [1, 2, 3, 4, 5]

     0        9
    "Hola mundo"
*/

console.log("for in");
for(let k in humanoNuevo){
    console.log(k);
    // console.log(humanoNuevo.k) Esta notación no nos serviría porque tratarías de acceder a la propiedad k la cuál no existe.
    console.log(humanoNuevo[k]);
}

for(let i in "Hola mundo"){
    console.log(i);
}

for(let i in [10, 9, 8, 10, 14]){
    console.log(i);
}

console.log("for of");


for(let c of "Hola mundo"){
    console.log(c);
}

for(let v of [10, 9, 8, 10, 14]){
    console.log(v);
}

/*
    Ejercicios complementarios:

    Fácil
    - Crear un objeto llamado ListaLibros que permita almacenar dentro de él más de un Libro.
    - Agregar un método a ListaLibros para agregar un nuevo libro.
    - Agregar un método a ListaLibros para verificar si hay un libro a partir de un nombre especificado.

    Medio
    - Agregar un método a ListaLibros que regrese un arreglo de libros que contenga todos los libros de un autor en específico.
    - Crear un método que permita mostrar todos los libros en una ListaLibros.

    Difícil
    - Agregar un método a ListaLibros para eliminar un libro a partir de su nombre.

*/
