let numeros = [4, 9, 15, 2, 30, 7, 12];

let palabras = ["isla", "casa", "perro", "mesa", "universidad", "gato", "crisis"];


// 1. Encontrar el número más grande
let mayor = numeros.reduce(function (maximo, actual) {
    if (actual > maximo) {
        return actual;
    } else {
        return maximo;
    }
});
console.log("Número mayor:", mayor);


// 2. Encontrar la cadena más larga
let masLarga = palabras.reduce(function (larga, actual) {
    if (actual.length > larga.length) {
        return actual;
    } else {
        return larga;
    }
});
console.log("Palabra más larga:", masLarga);


// 3. Encontrar los números pares
let pares = numeros.filter(function (n) {
    return n % 2 === 0;
});
console.log("Pares:", pares);


// 4. Encontrar los números impares
let impares = numeros.filter(function (n) {
    return n % 2 !== 0;
});
console.log("Impares:", impares);


// 5. Palabras que contienen "is"
let conIs = palabras.filter(function (palabra) {
    return palabra.includes("is");
});
console.log("Palabras con 'is':", conIs);


// 6. Comprobar que todos los números son divisibles entre 3
let todosDiv3 = numeros.every(function (n) {
    return n % 3 === 0;
});
console.log("¿Todos divisibles entre 3 (numeros)?", todosDiv3);

let multiplosDe3 = [3, 6, 9, 12];
let todosDiv3Otro = multiplosDe3.every(function (n) {
    return n % 3 === 0;
});
console.log("¿Todos divisibles entre 3 (multiplosDe3)?", todosDiv3Otro);


// 7. Unir dos arrays "en zip"
let letras = ["a", "b", "c"];
let cifras = [1, 2, 3];

let zip = letras.map(function (letra, index) {
    return [letra, cifras[index]];
});
console.log("Zip (parejas):", zip);

let zipPlano = zip.flat();
console.log("Zip plano:", zipPlano);


// 8. Ordenar el array unido de menor a mayor
let unido = numeros.concat(cifras);
unido.sort(function (a, b) {
    return a - b;
});
console.log("Unido y ordenado:", unido);



// 9. Quitar la primera palabra del array
let copia1 = palabras.slice();
let quitada = copia1.shift();
console.log("Palabra quitada:", quitada);
console.log("Array sin la primera:", copia1);



// 10. Poner una palabra nueva al principio
let copia2 = palabras.slice();
copia2.unshift("nueva");
console.log("Con palabra nueva al principio:", copia2);


// 11. Reemplazar algunos elementos
let copia3 = palabras.slice();
copia3.splice(1, 2, "coche", "libro");
console.log("Con elementos reemplazados:", copia3);