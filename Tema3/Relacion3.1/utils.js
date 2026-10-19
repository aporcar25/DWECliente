function maximo(n1, n2, n3, n4) {
    return Math.max(n1, n2, n3, n4);
}

function lanzamiento() {
    return Math.floor(Math.random() * 6) + 1;
}

function simularTiradas(numTiradas) {
    let contador = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < numTiradas; i++) {
        let valor = lanzamiento();
        contador[valor - 1]++;
    }
    return contador;
}

function volumenEsfera(radio) {
    return (4 / 3) * Math.PI * Math.pow(radio, 3);
}

function areaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}

function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    return base * potencia(base, exponente - 1);
}

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}