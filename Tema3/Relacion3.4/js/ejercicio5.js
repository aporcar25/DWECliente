function buscarPuntosSilla(matriz) {
    let encontrados = 0;



    matriz.forEach(function (fila, f) {
        let maximoFila = Math.max(...fila);

        fila.forEach(function (valor, c) {

            let columna = [];

            matriz.forEach(function (filaDeLaMatriz) {
                columna.push(filaDeLaMatriz[c]);
            });

            let minimoColumna = Math.min(...columna);

            if (valor == maximoFila && valor == minimoColumna) {
                console.log("Punto de silla en fila " + (f + 1) + ", columna " + (c + 1) + " (valor " + valor + ")");
                encontrados++;
            }
        });
    });


    if (encontrados == 0) {
        console.log("No saddle points");
    }
}


// Prueba 1: matriz que sí tiene un punto de silla
let matriz1 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];
console.log("Matriz 1:");
buscarPuntosSilla(matriz1);


// Prueba 2: matriz que no tiene ninguno
let matriz2 = [
    [5, 1, 2, 3, 4],
    [4, 5, 1, 2, 3],
    [3, 4, 5, 1, 2],
    [2, 3, 4, 5, 1],
    [1, 2, 3, 4, 5]
];
console.log("Matriz 2:");
buscarPuntosSilla(matriz2);