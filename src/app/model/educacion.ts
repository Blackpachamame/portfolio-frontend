export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    fechaIni: number;
    fechaFin: number;

    constructor(nombreE: string, descripcionE: string, fechaIni: number, fechaFin: number) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaIni = fechaIni;
        this.fechaFin = fechaFin;
    }
}
