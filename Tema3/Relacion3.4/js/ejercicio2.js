let nombres = [
    "John Smith",
    "Maria Lopez",
    "Jane Doe",
    "Pedro Gomez",
    "Juan Perez",
    "Ana Torres",
    "Julia Ramos",
    "Jose Alvarez"
];


let conJ = nombres.filter(function (nombre) {
    return nombre.startsWith("J");
});
console.log("Los que empiezan por J:", conJ);


let iniciales = conJ.map(function (nombre) {
    let partes = nombre.split(" ");

    let inicialNombre = partes[0].charAt(0);
    let inicialApellido = partes[1].charAt(0);

    return inicialNombre + inicialApellido;
});
console.log("Iniciales:", iniciales);


iniciales.sort();
console.log("Iniciales ordenadas:", iniciales);