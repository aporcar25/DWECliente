class Alumno {
    constructor(id, nombre, notaMedia) {
        this.id = id;
        this.nombre = nombre;
        this.notaMedia = notaMedia;
    }
}

class Colegio {
    constructor(nombre, numAulas, numAlumnos) {
        this.nombre = nombre;
        this.numAulas = numAulas;
        this.numAlumnos = numAlumnos;

        this.alumnos = [];

        for (let i = 0; i < numAlumnos; i++) {
            let alumnoNuevo = new Alumno(i, "alumno" + (i + 1), 5);
            this.alumnos.push(alumnoNuevo);
        }
    }

    buscarAlumno(id) {
        let alumnoEncontrado = this.alumnos.find(function (alumno) {
            return alumno.id == id;
        });
        return alumnoEncontrado;
    }

    consultarNotaMedia(id) {
        let alumno = this.buscarAlumno(id);

        if (alumno == undefined) {
            console.log("No existe ningún alumno con el id " + id);
            return;
        }

        console.log("La nota media de " + alumno.nombre + " (id " + id + ") es: " + alumno.notaMedia.toFixed(2));
    }

    modificarNotaMedia(id, nuevaNota) {
        let alumno = this.buscarAlumno(id);

        if (alumno == undefined) {
            console.log("No existe ningún alumno con el id " + id);
            return;
        }

        if (nuevaNota < 0 || nuevaNota > 10) {
            console.log("La nota tiene que estar entre 0 y 10");
            return;
        }

        alumno.notaMedia = nuevaNota;
        console.log("La nota media de " + alumno.nombre + " ahora es: " + alumno.notaMedia.toFixed(2));
    }

    mostrarAlumnos() {
        console.log("Alumnos de " + this.nombre + ":");

        this.alumnos.forEach(function (alumno) {
            console.log("id " + alumno.id + " - " + alumno.nombre + " - nota: " + alumno.notaMedia.toFixed(2));
        });
    }
}

let colegio1 = new Colegio("Colegio San José", 5, 4);

colegio1.mostrarAlumnos();

colegio1.consultarNotaMedia(2);

colegio1.modificarNotaMedia(2, 8.5);
colegio1.consultarNotaMedia(2);

colegio1.consultarNotaMedia(10);
colegio1.modificarNotaMedia(1, 25);

let colegio2 = new Colegio("Colegio Santa María", 3, 2);
colegio2.mostrarAlumnos();