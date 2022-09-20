export class Skill {
    id: number;
    descripcion: string;
    porcentaje: number;

    constructor(descripcion:string, porcentaje: number){
        this.descripcion = descripcion;
        this.porcentaje = porcentaje;
    }
}
