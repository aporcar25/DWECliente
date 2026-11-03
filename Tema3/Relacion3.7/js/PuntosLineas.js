function Punto(x, y) {
    this.x = x;
    this.y = y;
}

function Recta(punto1, punto2) {
    this.punto1 = punto1;
    this.punto2 = punto2;
}

let puntoA = new Punto(1, 2);
let puntoB = new Punto(4, 6);

let recta1 = new Recta(puntoA, puntoB);

console.log("Punto A: (" + puntoA.x + ", " + puntoA.y + ")");
console.log("Punto B: (" + puntoB.x + ", " + puntoB.y + ")");

console.log("El punto1 de la recta tiene x = " + recta1.punto1.x);
console.log("El punto2 de la recta tiene y = " + recta1.punto2.y);