export class Perfil {
    id: number;
    perfil: string;
    descripcion: string;
    img: Blob;

    constructor(perfil: string, descripcion: string, img: Blob){
        this.perfil = perfil;
        this.descripcion = descripcion;
        this.img = img;
    }
}
