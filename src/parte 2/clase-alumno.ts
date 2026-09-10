/**
 * EJERCICIOS 8, 9 y 10 - Clase Alumno
 * ---------------------------------------------------------------------------
 * Esta clase se completa en tres pasos, marcados con TODO. Cada paso agrega
 * comportamiento sin romper el anterior:
 *
 *   - Ejercicio 8:  atributos básicos, getNombreCompleto, esMayorDeEdad.
 *   - Ejercicio 9:  `edad` pasa a ser privada; getEdad/setEdad con validación.
 *   - Ejercicio 10: arreglo de materias inscriptas.
 */



// -----------------------------------------------------------------------------
// EJERCICIO 10 - interface Materia
// -----------------------------------------------------------------------------
//TODO cambiar a type
export interface Materia {
    codigo: number;
    nombre: string;
    horas: number;
}

export class Alumno {
    public legajo: number;
    public nombre: string;
    public apellido: string;
    public email: string;

    // EJERCICIO 9: `edad` es privada. Se accede solo con getEdad/setEdad.
    private edad: number;

    // EJERCICIO 10: materias en las que está inscripto el alumno.
    private materias: Materia[] = [];

    constructor(
        legajo: number,
        nombre: string,
        apellido: string,
        edad: number,
        email: string
    ) {
        // TODO (Ejercicio 8): asignar los atributos recibidos.
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
}

    // -------------------------------------------------------------------
    // EJERCICIO 8
    // -------------------------------------------------------------------

    getNombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
        
    }

    esMayorDeEdad(): boolean {
        return this.edad >= 18
    }

    // -------------------------------------------------------------------
    // EJERCICIO 9 - encapsulamiento de `edad`
    // -------------------------------------------------------------------

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        // TODO: debe impedir edades inválidas.
        // edad < 0   -> throw new Error(...)
        // edad > 120 -> throw new Error(...)
        if (edad < 0 || edad > 120){ 
            throw new Error("Edad inválida"); }
        
        this.edad = edad; 
    }

    // -------------------------------------------------------------------
    // EJERCICIO 10 - materias
    // -------------------------------------------------------------------

    agregarMateria(materia: Materia): void {
        this.materias.push(materia)
    }

    quitarMateria(codigo: number): Materia | undefined {
        // TODO: quitar la materia con ese código y devolverla.
        // Si no está inscripto en ninguna con ese código, devolver undefined.
        const indice = this.materias.findIndex( materia => materia.codigo === codigo ); 
        if (indice === -1){ 
            return undefined;} 
        return this.materias.splice(indice, 1)[0]; }
    

    estaInscripto(codigo: number): boolean {
        // TODO
        return this.materias.some( materia => materia.codigo === codigo );
    }

    cantidadMaterias(): number {
        // TODO
        return this.materias.length;
    }

    getMaterias(): Materia[] {
        // TODO: devolver las materias sin exponer el arreglo interno
        // (devolver una copia, no la referencia original).
        return [...this.materias];
    }
}
