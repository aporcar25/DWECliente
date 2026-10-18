// ==========================================
// EJERCICIO 3: Página con el objeto Window
// ==========================================

let ventanaNueva = null;

// Apartado a: Ventana de confirmación
function mostrarConfirmacion() {
    let confirmación = confirm("¿Deseas confirmar esta opción?");
    if (confirmación) {
        alert("Has pulsado la opción: Aceptar");
    } else {
        alert("Has pulsado la opción: Cancelar");
    }
}

// Apartado b: Comprobar si una ventana esta cerrada o no
function comprobarVentanaCerrada() {
    if (!ventanaNueva || ventanaNueva.closed) {
        ventanaNueva = window.open("", "", "width=300, height=200");
        ventanaNueva.document.body.innerHTML = "<h3>Ventana B</h3>";
    }

    setTimeout(() => {
        if (ventanaNueva.closed) {
            alert("La ventana se encuentra CERRADA.");
        } else {
            alert("La ventana permanece ABIERTA.");
        }
    }, 2000);
}

// Apartado c: Solicitar un nombre para el nombre de la ventana.
function pedirNombreVentana() {
    let nombre = prompt("Introduce el nombre que quieres para asignar a la ventana:");
    if (nombre) {
        ventanaNueva = window.open("", nombre, "width=300, height=200");
        ventanaNueva.document.body.innerHTML = "<h3>Ventana con nombre: " + ventanaNueva.name + "</h3>";
    }
}

// Apartado d1: Cierra la ventana actual
function cerrarVentanaActual() {
    window.close();
}

// Apartado d2: Cierra una ventana abierta que está en la variable "ventanaNueva"
function cerrarVentanaSecundaria() {
    if (ventanaNueva && !ventanaNueva.closed) {
        ventanaNueva.close();
    } else {
        alert("No hay ninguna ventana secundaria abierta.");
    }
}

// Apartado f: Ventana de 300x100 que puede ser cambiada de tamaño.
function abrirVentanaRedimensionable() {
    ventanaNueva = window.open("", "", "width=300, height=100, resizable=yes");
    ventanaNueva.document.body.innerHTML = "<h3>Ventana redimensionable (300x100)</h3>";
}

// Apartado g: Abre una ventana y escribe un mensaje en la página principal (padre)
function escribirEnPaginaPadre (idContenedor) {
    ventanaNueva = window.open("", "", "width=300, height=100, resizable=yes");
    ventanaNueva.document.body.innerHTML = "<h3>Ventana que modifica el padre</h3>";
    let contenedor = document.getElementById(idContenedor);
    contenedor.innerHTML = "<b>Texto insertado en la página padre:</b> La ventana secundaria ha actualizado este mensaje.";
}

// Apartado h: Mueve la ventana 50 pixeles hacia abajo y hacia la derecha al activar el enlace.
function moverVentanaRelativo() {
    if (ventanaNueva && !ventanaNueva.closed) {
        ventanaNueva.moveBy(50, 50);
    } else {
        alert("Tienes que abrir la ventana antes de intentar moverla.");
    }
}

// Apartado i: Posiciona la ventana en unas coordenadas fijas de la pantalla
function moverVentanaAbsoluto() {
    if (ventanaNueva && !ventanaNueva.closed) {
        ventanaNueva.moveTo(100, 100);
    } else {
        alert("Tienes que abrir la ventana antes de ubicarla.");
    }
}

// ==========================================
// EJERCICIO 4: Objetos Location y History
// ==========================================

// Apartado a: Muestra el nombre del marcador actual
function mostrarNombreMarcador(elemento) {
    let nombreMarcador = elemento.textContent || elemento.innerText;
    alert("Has activado el marcador: " + nombreMarcador);
}

// Apartado b: Indica el nombre del host en el que está publicada la página
function mostrarHost(idContenedor) {
    let contenedor = document.getElementById(idContenedor);
    contenedor.innerHTML = "<b>Host actual:</b> " + location.host;
}

// Apartado c: Devuelve la URL completa de la página actual
function mostrarUrlCompleta(idContenedor) {
    let contenedor = document.getElementById(idContenedor);
    contenedor.innerHTML = "<b>URL completa:</b> " + location.href;
}

// Apartado d: Pregunta por una dirección y la activa en el navegador
function navegarADireccion() {
    let nuevaUrl = prompt("Introduce la dirección web a la que deseas navegar (ej: https://www.google.com):");
    if (nuevaUrl) {
        location.href = nuevaUrl;
    }
}

// Apartado e: Indica el protocolo que se está utilizando en la página actual
function mostrarProtocolo(idContenedor) {
    let contenedor = document.getElementById(idContenedor);
    contenedor.innerHTML = "<b>Protocolo utilizado:</b> " + location.protocol;
}

// Apartado f: Recarga de nuevo la página actual
function recargarPagina(evento) {
    location.reload();
} 

// ==========================================
// EJERCICIO 5: Objeto Document
// ==========================================

// Apartado a: Muestra la fecha de la última actualización del documento
function mostrarUltimaActualizacion(idContenedor) {
    let contenedor = document.getElementById(idContenedor);
    contenedor.innerHTML = "<b>Fecha de última actualización:</b> " + document.lastModified;
}

// Apartado b: Muestra la URL de procedencia
function mostrarReferrer(idContenedor) {
    let contenedor = document.getElementById(idContenedor);
    let procedencia = document.referrer ? document.referrer : "Ninguna (acceso directo)";
    contenedor.innerHTML = "<b>URL de procedencia:</b> " + procedencia;
}

// Apartado c: Muestra el título del documento actual
function mostrarTitulo(idContenedor) {
    let contenedor = document.getElementById(idContenedor);
    contenedor.innerHTML = "<b>Título del documento:</b> " + document.title;
}

// Apartado d: Muestra la dirección URL completa del documento
function mostrarUrlDocumento(idContenedor) {
    let contenedor = document.getElementById(idContenedor);
    contenedor.innerHTML = "<b>URL completa del documento:</b> " + document.URL;
}

// Apartado e (Ejemplo 1): Escritura DURANTE la carga del documento
function escribirDuranteCarga() {
    document.write("<p style='color: green;'><b>[Ejemplo 1 - Durante la carga]:</b> Escrito con document.write mientras el documento se cargaba.</p>");
}

// Apartado e (Ejemplo 2): Escritura DESPUÉS de la carga usando
function escribirDespues() {
    if (confirm("Atención: document.write tras la carga borrará toda la página actual. ¿Quieres continuar?")) {
        document.open();
        document.write("<!DOCTYPE html><html><head><title>Sobrescrito</title></head><body>");
        document.write("<h2>¡Página sobrescrita por completo!</h2>");
        document.write("<p>document.write ha borrado el DOM anterior porque el documento ya estaba cerrado.</p>");
        document.write("<button onclick='location.reload()'>Volver / Recargar</button>");
        document.write("</body></html>");
        document.close();
    }
}

// ==========================================
// EJERCICIO 6: Objeto Document
// ==========================================

// Apartado a: Muestra el número de anclas que tiene el documento
function mostrarNumeroAnclas(idContenedor) {
    let contenedor = document.getElementById(idContenedor);
    let numAnclas = document.anchors.length;
    contenedor.innerHTML = "<b>Número de anclas:</b> " + numAnclas;
}

// Apartado b: Muestra el texto dentro del tag del primer ancla
function mostrarTextoPrimerAncla(idContenedor) {
    let contenedor = document.getElementById(idContenedor);
    if (document.anchors.length > 0) {
        let textoAncla = document.anchors[0].innerHTML;
        contenedor.innerHTML = "<b>Texto del primer ancla:</b> " + textoAncla;
    } else {
        contenedor.innerHTML = "<b>Texto del primer ancla:</b> No hay anclas con el atributo 'name' en el documento.";
    }
}

// Apartado c: Muestra el número de imágenes del documento
function mostrarNumeroImagenes(idContenedor) {
    let contenedor = document.getElementById(idContenedor);
    let numImagenes = document.images.length;
    contenedor.innerHTML = "<b>Número de imágenes:</b> " + numImagenes;
}

// Apartado d: Muestra el id de la primera imagen
function mostrarIdPrimeraImagen(idContenedor) {
    let contenedor = document.getElementById(idContenedor);
    if (document.images.length > 0) {
        let idImagen = document.images[0].id ? document.images[0].id : "La primera imagen no tiene un atributo ID.";
        contenedor.innerHTML = "<b>ID de la primera imagen:</b> " + idImagen;
    } else {
        contenedor.innerHTML = "<b>ID de la primera imagen:</b> No hay imágenes en el documento.";
    }
}

// Apartado e: Muestra el número de enlaces del documento
function mostrarNumeroEnlaces(idContenedor) {
    let contenedor = document.getElementById(idContenedor);
    let numEnlaces = document.links.length;
    contenedor.innerHTML = "<b>Número de enlaces:</b> " + numEnlaces;
}

// Apartado f: Cambia el título del documento
function cambiarTituloDocumento() {
    let nuevoTitulo = prompt("Introduce el nuevo título para la página:");
    if (nuevoTitulo) {
        document.title = nuevoTitulo;
        alert("¡Título actualizado correctamente a: " + document.title + "!");
    }
}