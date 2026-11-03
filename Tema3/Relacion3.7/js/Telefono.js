function Telefono(numero) {
    this.numero = numero;
    this.llamadas = 0;

    this.llamar = function () {
        this.llamadas = this.llamadas + 1;
    };
}

let telefono1 = new Telefono("600111222");
let telefono2 = new Telefono("655333444");

console.log("Llamadas del telefono1: " + telefono1.llamadas);

telefono1.llamar();
telefono1.llamar();
telefono1.llamar();
telefono2.llamar();

console.log("Llamadas del telefono1: " + telefono1.llamadas);
console.log("Llamadas del telefono2: " + telefono2.llamadas);

