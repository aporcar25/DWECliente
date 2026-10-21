function generarAleatorios(cantidad, max) {
    const resultado = [];

    for (let i = 0; i < cantidad; i++) {
        resultado.push(Math.floor(Math.random() * (max + 1)));
    }
    return resultado;
}

function eliminarDuplicados(array) {
    const sinDuplicados = [];

    for (let i = 0; i < array.length; i++) {
        if (!sinDuplicados.includes(array[i])) {
            sinDuplicados.push(array[i]);
        }
    }
    return sinDuplicados;
}

function ordenarBurbuja(array) {
    const ordenado = [...array];

    for (let i = 0; i < ordenado.length - 1; i++) {
        for (let j = 0; j < ordenado.length - 1 - i; j++) {
            if (ordenado[j] > ordenado[j + 1]) {
                let temporal = ordenado[j];
                ordenado[j] = ordenado[j + 1];
                ordenado[j + 1] = temporal;
            }
        }
    }
    return ordenado;
}