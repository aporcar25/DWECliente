// EJERCICIO 2
function obtenerNota(numEstudiante, trimestre) {
    if (numEstudiante < 1 || numEstudiante > clase.length) {
        return null;
    }

    let campos = clase[numEstudiante - 1].split(",").map(c => c.trim());

    if (trimestre === undefined) {
        let suma = Number(campos[2]) + Number(campos[3]) + Number(campos[4]);
        return suma / 3;
    }

    return Number(campos[trimestre + 1]);
}

// EJERCICIO 3
function edadMedia() {
    if (clase.length === 0) {
        return null;
    }

    let suma = 0;

    for (let i = 0; i < clase.length; i++) {
        let campos = clase[i].split(",");
        let edad = Number(campos[1].trim());

        suma = suma + edad;
    }
    return suma / clase.length;
}

// EJERCICIO 4
// Hacemos un azar que no se repita nadie hasta que hayan salido todos
let pendientes = [];

function alumnoAlAzar() {
    if (clase.length === 0) {
        return null;
    }

    if (pendientes.length === 0) {
        for (let i = 0; i < clase.length; i++) {
            pendientes.push(i);
        }
    }

    let posicion = Math.floor(Math.random() * pendientes.length);

    let indiceAlumno = pendientes.splice(posicion, 1)[0];

    return clase[indiceAlumno].split(",")[0].trim();
}