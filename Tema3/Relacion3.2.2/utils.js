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

