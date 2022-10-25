export class Perfil {
  id: number;
  perfil: string;
  descripcion: string;
  img: string;

  constructor(perfil: string, descripcion: string, img: string) {
    this.perfil = perfil;
    this.descripcion = descripcion;
    this.img = img;
  }
}
