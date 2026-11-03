function codigoCuadrado(frase) {
    let palabras = frase.split(" ");
    let sinEspacios = palabras.join("");
    let texto = sinEspacios.toLowerCase();


    let total = texto.length;

    let columnas = Math.ceil(Math.sqrt(total));

    let filas = Math.ceil(total / columnas);

    console.log("Letras: " + total + " -> " + filas + " filas y " + columnas + " columnas");


    let letras = texto.split("");

    let rectangulo = [];

    letras.forEach(function (letra, i) {

        if (i % columnas == 0) {
            rectangulo.push("");
        }

        rectangulo[rectangulo.length - 1] = rectangulo[rectangulo.length - 1] + letra;
    });

    console.log("Rectángulo:");
    rectangulo.forEach(function (fila) {
        console.log(fila);
    });


    let codificadas = [];

    let contador = new Array(columnas).fill(0);

    contador.forEach(function (valor, c) {

        let palabra = "";

        rectangulo.forEach(function (fila) {
            palabra = palabra + fila.charAt(c);
        });

        codificadas.push(palabra);
    });
    return codificadas.join(" ");
}

let mensaje = "If man was meant to stay on the ground god would have given us roots";
let codificado = codigoCuadrado(mensaje);

console.log("Mensaje codificado:");
console.log(codificado);