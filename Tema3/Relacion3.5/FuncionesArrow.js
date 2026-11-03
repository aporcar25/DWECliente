// EJERCICIO 1
// a)
let sum = (num1, num2) => num1 + num2;

// b)
let stringLength = (str) => {
    console.log(`the length of "${str}" is:`, str.length);
};

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";

// c)
let stringLength2 = (str) => {
    let length = str.length;
    console.log(`the length of "${str}" is:`, length);
    return str.length;
};

// d)
let alerts = [
    "Hey, you are awesome",
    "You are so wonderful",
    "What a marvel you are",
    "You're so lovely",
    "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"
];

let showAlert = name => {
    alert(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
}

// EJERCICIO 2
let presentarse = (name, age) => `Hello, I am ${name}, and I am ${age} years old.`;

// EJERCICIO 3
let sumarArray = arr => arr.reduce((acumulador, numero) => acumulador + numero, 0);

// EJERCICIO 4
let eye = "eye";
const fire = () => "bulls-";

// EJERCICIO 5
const fibonacci = n => n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);