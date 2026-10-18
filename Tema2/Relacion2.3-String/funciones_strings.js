// ===========================
// FUNCIONES EJERCICIO 1
// ===========================

// a)
function invierteCadena(cad_arg) {
    let resultado = "";
    for (let i = cad_arg.length - 1; i >= 0; i--) {
        resultado += cad_arg.charAt(i);
    }
    return resultado;
}

// b)
function inviertePalabras(cad_arg) {
    let resultado = "";
    let palabraActual = "";

    for (let i = 0; i < cad_arg.length; i++) {
        let caracter = cad_arg.charAt(i);

        if (caracter === " ") {
            resultado += invierteCadena(palabraActual) + " ";
            palabraActual = "";
        } else {
            palabraActual += caracter;
        }
    }
    resultado += invierteCadena(palabraActual);
    return resultado;
}

// c)
function encuentraPalabraMasLarga(cad_arg) {
    let maxLongitud = 0;
    let longitudActual = 0;

    for (let i = 0; i < cad_arg.length; i++) {
        let caracter = cad_arg.charAt(i);

        if (caracter === " ") {
            if (longitudActual > maxLongitud) {
                maxLongitud = longitudActual;
            }
            longitudActual = 0;
        } else {
            longitudActual++;
        }
    }

    if (longitudActual > maxLongitud) {
        maxLongitud = longitudActual;
    }

    return maxLongitud;
}

// d)
function filtraPalabrasMasLargas (cad_arg, i) {
    let contador = 0;
    let longitudActual = 0;

    for (let j = 0; j < cad_arg.length; j++) {
        let caracter = cad_arg.charAt(j);

        if (caracter === " ") {
            if (longitudActual > i) {
                contador++;
            }
            longitudActual = 0;
        } else {
            longitudActual++;
        }
    }

    if (longitudActual > i) {
        contador++;
    }

    return contador;
}

// e)
function cadenaBienFormada(cad_arg) {
    if (cad_arg.length === 0) 
        return "";

    let primeraLetra = cad_arg.charAt(0).toUpperCase();
    let resto = cad_arg.substring(1).toLowerCase();

    return primeraLetra + resto;
}

// ===========================
// FUNCION EJERCICIO 2
// ===========================

function informacionCadena(cad_arg) {
    if (cad_arg === cad_arg.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas.";
    } else if (cad_arg === cad_arg.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    } else {
        return "La cadena es una mezcla de mayúsculas y minúsculas.";
    }
}

// ===========================
// FUNCION EJERCICIO 3
// ===========================

function localizaSubcadena(cad_arg, subcadena) {
    let posiciones = "";
    let pos = cad_arg.indexOf(subcadena);

    while (pos !== -1) {
        posiciones += pos + " ";
        pos = cad_arg.indexOf(subcadena, pos + 1);
    }

    if (posiciones === "") {
        return "La subcadena '" + subcadena + "' no se encuentra en el texto.";
    }

    return "La subcadena '" + subcadena + "' aparece en los índices: " + posiciones;
}

// ===========================
// FUNCION EJERCICIO 4
// ===========================

function organizaConsonantesVocales(cad_arg) {
    let consonantes = "";
    let vocales = "";
    let textoMinusculas = cad_arg.toLowerCase(); 

    for (let i = 0; i < cad_arg.length; i++) {
        let caracterOriginal = cad_arg.charAt(i);
        let caracterMinusculas = textoMinusculas.charAt(i);

        if (caracterMinusculas !== " ") {
            if (caracterMinusculas === 'a' || caracterMinusculas === 'e' || caracterMinusculas === 'i' || 
                caracterMinusculas === 'o' || caracterMinusculas === 'u' ||
                caracterMinusculas === 'á' || caracterMinusculas === 'é' || caracterMinusculas === 'í' || 
                caracterMinusculas === 'ó' || caracterMinusculas === 'ú') {

                vocales += caracterOriginal;
            } else {
                consonantes += caracterOriginal;
            }
        }
    }

    return consonantes + vocales;
}

// ===========================
// FUNCION EJERCICIO 5
// ===========================

function eliminaCaracteresRepetidos(cad_arg) {
    let resultado = "";

    for (let i = 0; i < cad_arg.length; i++) {
        let caracter = cad_arg.charAt(i);

        if (resultado.indexOf(caracter) === -1) {
            resultado += caracter;
        }
    }

    return resultado;
}


// ===========================
// FUNCION EJERCICIO 6
// ===========================

function esSubcadena(cadena1, cadena2) {
    let posicion = cadena1.indexOf(cadena2);

    if (posicion !== -1) {
        return "La cadena '" + cadena2 + "' sí es subcadena. Primera posición: " + posicion;
    } else {
        return "La cadena '" + cadena2 + "' no es subcadena de la primera.";
    }
}

// ===========================
// FUNCION EJERCICIO 7
// ===========================

function esPalindromo(cad_arg) {
    let cadenaLimpia = "";
    let textoMinusculas = cad_arg.toLowerCase();

    for (let i = 0; i < textoMinusculas.length; i++) {
        let caracter = textoMinusculas.charAt(i);
        if (caracter !== " ") {
            cadenaLimpia += caracter;
        }
    }

    let cadenaInvertida = invierteCadena(cadenaLimpia);

    return cadenaLimpia === cadenaInvertida;
}

// ===========================
// FUNCION EJERCICIO 8
// ===========================

function cuentaPalabras(cad_arg) {
    let contador = 0;
    let enPalabra = false;

    for (let i = 0; i < cad_arg.length; i++) {
        let caracter = cad_arg.charAt(i);

        if (caracter !== " ") {
            if (!enPalabra) {
                contador++;
                enPalabra = true;
            }
        } else {
            enPalabra = false;
        }
    }
    return contador;
}

// ===========================
// FUNCION EJERCICIO 9
// ===========================

function validateCreditCard(numeroTarjeta) {
    if (numeroTarjeta.length !== 16) {
        return false;
    }

    let suma = 0;
    let primerDigito = numeroTarjeta.charAt(0);
    let todosIguales = true;

    for (let i = 0; i < numeroTarjeta.length; i++) {
        let caracter = numeroTarjeta.charAt(i);

        if (caracter < '0' || caracter > '9') {
            return false;
        }

        let digito = Number(caracter);
        suma += digito;

        if (caracter !== primerDigito) {
            todosIguales = false;
        }
    }

    if (todosIguales) {
        return false;
    }

    let ultimoDigito = Number(numeroTarjeta.charAt(15));
    if (ultimoDigito % 2 !== 0) {
        return false;
    }

    if (suma <= 16) {
        return false;
    }

    return true;
}

// ===========================
// FUNCION EJERCICIO 10
// ===========================

function validateCreditCard2(numeroTarjeta) {
    let tarjetaLimpia = "";

    for (let i = 0; i < numeroTarjeta.length; i++) {
        let caracter = numeroTarjeta.charAt(i);
        if (caracter !== '-') {
            tarjetaLimpia += caracter;
        }
    }

    return validateCreditCard(tarjetaLimpia);
}

// ===========================
// FUNCION EJERCICIO 11
// ===========================

function luhnAlgorithm(numeroTarjeta) {
    let partes = numeroTarjeta.split('-');
    let tarjetaLimpia = partes.join('');

    partes = tarjetaLimpia.split(' ');
    tarjetaLimpia = partes.join('');

    if (tarjetaLimpia.length === 0) {
        return false;
    }

    for (let i = 0; i < tarjetaLimpia.length; i++) {
        let caracter = tarjetaLimpia.charAt(i);
        if (caracter < '0' || caracter > '9') {
            return false;
        }
    }

    let sumaTotal = 0;
    let duplicar = false;

    for (let i = tarjetaLimpia.length - 1; i >= 0; i--) {
        let digito = Number(tarjetaLimpia.charAt(i));

        if (duplicar) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }

        sumaTotal += digito;
        duplicar = !duplicar;
    }

    return (sumaTotal % 10 === 0);
}