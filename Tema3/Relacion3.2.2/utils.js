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

// EJERCICIO 5
function paresImpares() {
    const arNumeros = [];

    for (let i = 0; i < 100; i++) {
        let numero = Math.floor(Math.random() * 1000) + 1;
        arNumeros.push(numero);
    }

    let pares = [];
    let impares = [];

    for (let i = 0; i < arNumeros.length; i++) {
        if (arNumeros[i] % 2 === 0) {
            pares.push(arNumeros[i]);
        } else {
            impares.push(arNumeros[i]);
        }
    }

    let organizado = pares.concat(impares);

    return { arNumeros: arNumeros, organizado: organizado};
}

// EJERCICIO 6
const vendedores = [];

function altaVendedor(nombre) {
    nombre = nombre.trim();

    if (nombre === "") {
        return false;
    }

    for (let i = 0; i < vendedores.length; i++) {
        if (vendedores[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            return false;
        }
    }

    vendedores.push({ nombre: nombre, ventas: 0});
    return true;
}

function registrarVentas(indice, ventas) {
    if (indice < 0 || indice >= vendedores.length || Number.isNaN(ventas) || ventas < 0) {
        return false;
    }

    vendedores[indice].ventas = ventas;
    return true;
}

function calcularSueldo(ventas) {
    return 200 + ventas * 0.09;
}

// EJERCICIO 7
function ponerACero (array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = 0;
    }
}

function sumarUno(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + 1;
    }
}

function valoresConEspacios(array) {
    return array.join(" ");
}

// EJERCICIO 8
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function simularDados(lanzamientos) {
    let frecuencias = new Array(13).fill(0);

    for (let i = 0; i < lanzamientos; i++) {
        let suma = lanzarDado() + lanzarDado();
        frecuencias[suma]++;
    }
    return frecuencias;
}