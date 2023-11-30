// VARIABLES
// let
// Permite reasignación de valores
// Alcance de bloque y global
// Un bloque está referido con todo lo que se encuentre entre { }
// I.E. for(){}, if(){}, switch(){}, function(){}, etc.
// Se deben declarar para poder usarse
let mike = "Es un instructor"
console.log(mike)
mike = "Mike Nieva"
console.log(mike)

// ALCANCE GLOBAL
let pais = "Nueva Zelanda"

if(1===1){
  // ALCANCE DE BLOQUE
    let pais = "México"
    console.log(pais) // "México"
}

console.log(pais) // "Nueva Zelanda"


// const
// No permite reasignación de valores
// Alcance de bloque y global
// Se deben declarar para poder usarse
const bootcamp = "TripleTen"
console.log(bootcamp)
bootcamp = "New bootcamp"
console.log(bootcamp)


