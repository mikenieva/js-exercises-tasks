alert("hola mundo");
console.log("Hola, mundo!")

let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Programador",
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

console.log(persona);
console.dir(persona);