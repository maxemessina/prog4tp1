/**
 * EJERCICIO 20 (INTEGRADOR) - Sistema de gestión de una universidad
 * ---------------------------------------------------------------------------
 * Persona
 *   ├── Alumno
 *   └── Docente
 *
 * `Persona` es abstracta. `Alumno` y `Docente` implementan
 * `obtenerInformacion()` cada uno a su manera (polimorfismo).
 *
 * La relación con `Materia` es de ida y vuelta:
 *   - `alumno.inscribirse(materia)` debe dejar constancia tanto en el
 *     alumno (su lista de materias) como en la materia (su lista de
 *     alumnos inscriptos).
 *   - `docente.asignarMateria(materia)` es análogo, del lado docente.
 *
 * Los métodos de `Materia` (`inscribirAlumno`, `asignarDocente`) son el
 * mecanismo que usan `Alumno`/`Docente` para avisarle a la materia. No hace
 * falta (ni corresponde) llamarlos "a mano" salvo que quieras inscribir
 * solamente del lado de la materia.
 */

import { a } from "vitest/dist/chunks/suite.B2jumIFP.js";

export abstract class Persona {
    constructor(
        public legajo: number,
        public nombre: string,
        public apellido: string,
        public email: string
    ) {}

    abstract obtenerInformacion(): string;
}

export class Materia {
    private alumnosInscriptos: Alumno[] = [];
    private docentesAsignados: Docente[] = [];

    constructor(
        public codigo: number,
        public nombre: string,
        public horas: number
    ) {}

    inscribirAlumno(alumno: Alumno): void {
        if (!this.alumnosInscriptos.some(a => a.legajo === alumno.legajo)) {
            this.alumnosInscriptos.push(alumno);
        }
    }

    quitarAlumno(alumno: Alumno): void {
        // TODO: quitar el alumno de la lista, si está.
        this.alumnosInscriptos = this.alumnosInscriptos.filter(a => a.legajo !== alumno.legajo);
    }

    asignarDocente(docente: Docente): void {
        if (!this.docentesAsignados.some(d => d.legajo === docente.legajo)) {
            this.docentesAsignados.push(docente);
        }
    }

    getAlumnosInscriptos(): Alumno[] {
        return [...this.alumnosInscriptos];
    }

    getDocentesAsignados(): Docente[] {
        return [...this.docentesAsignados];
    }
}

export class Alumno extends Persona {
    private materias: Materia[] = [];

    constructor(legajo: number, nombre: string, apellido: string, email: string) {
        super(legajo, nombre, apellido, email);
    }

    inscribirse(materia: Materia): void {
        if (!this.materias.some(m => m.codigo === materia.codigo)) {
            this.materias.push(materia);
            materia.inscribirAlumno(this);
        }
    }

    quitarMateria(materia: Materia): void {
        this.materias = this.materias.filter(m => m.codigo !== materia.codigo);
        materia.quitarAlumno(this);    
    }

    getMaterias(): Materia[] {
        return [...this.materias];
    }

    obtenerInformacion(): string {
        return `Alumno: ${this.nombre} ${this.apellido}, Legajo: ${this.legajo}. Materias inscriptas: ${this.materias.length}`;
    }
}

export class Docente extends Persona {
    private materiasAsignadas: Materia[] = [];

    constructor(
        legajo: number,
        nombre: string,
        apellido: string,
        email: string,
        public especialidad: string
    ) {
        super(legajo, nombre, apellido, email);
    }

    asignarMateria(materia: Materia): void {
        if (!this.materiasAsignadas.some(m => m.codigo === materia.codigo)) {
            this.materiasAsignadas.push(materia);
            materia.asignarDocente(this);
        }
    }

    getMateriasAsignadas(): Materia[] {
        return [...this.materiasAsignadas];
    }

    obtenerInformacion(): string {
        return `Docente: ${this.nombre} ${this.apellido}, Legajo: ${this.legajo}. Especialidad: ${this.especialidad}`;
    }
}
