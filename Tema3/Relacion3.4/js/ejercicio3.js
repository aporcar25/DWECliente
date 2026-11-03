let mapa = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23]
];

function buscarTesoro(mapa) {

    let fila = 0;
    let columna = 0;

    let visitadas = [];

    let encontrado = false;

    while (encontrado === false) {

        let valor = mapa[fila][columna];

        let coordenadas = (fila + 1) * 10 + (columna + 1);

        if (visitadas.includes(coordenadas)) {
            console.log("Aquí no hay tesoro");
            return;
        }

        visitadas.push(coordenadas);
        console.log("Visito la celda " + coordenadas + " (pista: " + valor + ")");

        if (valor == coordenadas) {
            encontrado = true;
            console.log("¡Tesoro encontrado en la fila " + (fila + 1) + ", columna " + (columna + 1) + "!");
        } else {
            fila = Math.floor(valor / 10) - 1;
            columna = (valor % 10) - 1;
        }
    }
    return visitadas;
}

buscarTesoro(mapa);