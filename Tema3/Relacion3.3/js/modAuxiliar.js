/**
* @name filterNumbersGreaterThan
* @description Filtra los números de un array que sean mayor a cierto número x dejando solo los que sean menores a este
*
* @param {number[]} numbers - Array de números a filtrar
* @param {number} filter - Número a partir del cuál filtrar los demás número
s
* @returns {Number[]} - Array de números filtrados menores a {filter}
*
* @example
* filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
*/

function filterNumbersGreaterThan(numbers, filter) {
    let resultado = [];

    numbers.forEach(function (numero) {
        if (numero < filter) {
            resultado.push(numero);
        }
    });
    return resultado;
}

/**
* @name toHackerSpeak
* @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que
transformar las "a" en 4, las "e" en 3, las "i"
* en 1, las "o" en 0 y las "s" en 5
*
* @param {string} text
* @returns {String} - El texto convertido a "Hacker Speak"
*
* @example
* toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
*/

function toHackerSpeak(text) {
    let resultado = "";

    for (let letra of text) {
        let minuscula = letra.toLowerCase();

        if (minuscula === "a") {
            resultado += "4";
        } else if (minuscula === "e") {
            resultado += "3";
        } else if (minuscula === "i") {
            resultado += "1";
        } else if (minuscula === "o") {
            resultado += "0";
        } else if (minuscula === "s") {
            resultado += "5";
        } else {
            resultado += letra;
        }
    }
    return resultado;
}

/**
* @name getFileExtension
* @description Obtiene la extensión de un archivo
*
* @param {string} file - El nombre del archivo a obtener la extensión
* @returns {String} - La extensión del archivo
*
* @example
* getFileExtension("imagen.jpg") // returns "jpg"
*/

function getFileExtension(file) {
    let partes = file.split(".");

    if (partes.length == 1) {
        return "";
    }

    let extension = partes[partes.length - 1];
    return extension;
}

/**
* @name flatArray
* @description Dado un array 2D, devuelve un array 1D que contiene todos los
ítems
*
* @param {[][]} arr - Array 2D a "aplanar"
* @returns {[]} - El array "aplanado"
*
* @example
* flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
*/

function flatArray(arr) {
    let resultado = [];

    arr.forEach(function (fila) {
        fila.forEach(function (elemento) {
            resultado.push(elemento);
        });
    });
    return resultado; 
}

/**
* @name removeDuplicates
* @description Remueve duplicados de un array
*
* @param {[]} arr - Array con duplicados a remover
* @returns {[]} - El array resultante sin duplicados
*
* @example
* removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
*/

function removeDuplicates(arr) {
    let resultado = [];

    arr.forEach(function (elemento) {
        if (!resultado.includes(elemento)) {
            resultado.push(elemento);
        }
    });
    return resultado;
}

/**
* @name countLetter
* @description Devuelve la cantidad de veces que una letra aparece en un str
ing
*
* @param {string} letter - Letra a contar
* @param {string} text - Texto sobre el que realizar la cuenta de {letter}
* @returns {Number} - Número de veces que aparece {letter} en {text}
*
* @example
* countLetter("a", "javascript") // returns 2
*/

function countLetter(letter, text) {
    let contador = 0;
    let letraBuscada = letter.toLowerCase();

    for (let caracter of text) {
        if (caracter.toLowerCase() == letraBuscada) {
            contador++;
        }
    }
    return contador;
}

 /**
* @name removeWords
* @description Dado un string y un array de palabras a remover, devuelve el
string sin las palabras removidas
*
* @param {string} str - Texto a recortar
* @param {string[]} words - Palabras a remover
* @returns {string} - Texto resultante con las palabras removidas
*
* @example
* removeWords("This is a really bad test", ["really", "bad"]) // returns
"This is a test"
*/

function removeWords(str, words) {
    let palabras = str.split(" ");
    let resultado = [];

    // Recorro las palabras del texto una a una
    palabras.forEach(function (palabra) {
        if (!words.includes(palabra)) {
            resultado.push(palabra);
        }
    });
    return resultado.join(" ");
}