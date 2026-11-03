let persona1 = {
    nombre: "Antonio",
    edad: 19,

    esMayorDeEdad: function () {
        if (this.edad >= 18) {
            return true;
        } else {
            return false;
        }
    }
};

console.log(persona1.nombre); 
console.log(persona1.esMayorDeEdad());

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.esMayorDeEdad = function () {
        if (this.edad >= 18) {    
            return true;
        } else {
            return false;
        }
    };
}

let persona2 = new Persona("Lucía", 25);
let persona3 = new Persona("Pablo", 15);

console.log(persona2.nombre); 
console.log(persona2.esMayorDeEdad());
console.log(persona3.esMayorDeEdad());

const personas = [
  new Persona("Antonio", 20),
  new Persona("Lucía", 25),
  new Persona("Pablo", 15),
  new Persona("Marta", 30)
];

function edadPromedio(listaPersonas) { 
  let suma = 0;

  listaPersonas.forEach(function (persona) {
    suma = suma + persona.edad;
  });
 
  return suma / listaPersonas.length;
}

console.log("Edad promedio: " + edadPromedio(personas));