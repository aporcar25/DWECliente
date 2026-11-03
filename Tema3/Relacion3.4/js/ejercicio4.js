function numeroAlAzar(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function crearMapaTesoro(filas, columnas) {
    if (filas < 5 || columnas < 5) {
        console.log("El mapa tiene que ser como mínimo de 5x5");
        return;
    }

    if (filas > 9 || columnas > 9) {
        console.log("El mapa no puede pasar de 9x9");
        return;
    }


    // Crear la matriz llena de ceros
    let mapa = [];

    let filaDeCeros = new Array(columnas).fill(0);

    let contador = new Array(filas).fill(0);

    contador.forEach(function () {
        mapa.push(filaDeCeros.slice());
    });


    // Elegir el camino hasta el tesoro
    let camino = [11];

    while (camino.length < 6) {

        let f = numeroAlAzar(1, filas);
        let c = numeroAlAzar(1, columnas);

        let codigo = f * 10 + c;

        if (camino.includes(codigo) == false) {
            camino.push(codigo);
        }
    }


    // Escribir las pistas del camino en la matriz

    camino.forEach(function (codigo, posicion) {

        // Saco en qué fila y columna del array está esta celda.
        let f = Math.floor(codigo / 10) - 1;
        let c = (codigo % 10) - 1;

        // Compruebo si es la última celda del camino
        if (posicion == camino.length - 1) {
            // La última es el tesoro: su valor es igual a sus coordenadas
            mapa[f][c] = codigo;
        } else {
            // Las demás guardan la pista que lleva a la siguiente celda del camino
            mapa[f][c] = camino[posicion + 1];
        }
    });


    // Rellenar las celdas que siguen a 0
    mapa.forEach(function (fila, f) {
        fila.forEach(function (valor, c) {

            if (valor === 0) {
                let coordenadas = (f + 1) * 10 + (c + 1);

                let nuevo = numeroAlAzar(1, filas) * 10 + numeroAlAzar(1, columnas);

                if (nuevo === coordenadas) {
                    nuevo = 11;
                }

                mapa[f][c] = nuevo;
            }
        });
    });
    return mapa;
}

let mapaAleatorio = crearMapaTesoro(6, 7);

console.table(mapaAleatorio);

buscarTesoro(mapaAleatorio);