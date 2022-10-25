import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/model/perfil';
import { ImageService } from 'src/app/service/image.service';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  perfil: Perfil = null;

  constructor(
    private perfilS: PerfilService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.perfilS.detail(id).subscribe(
      (data) => {
        this.perfil = data;
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.perfil.img = this.imageService.url
    this.perfilS.update(id, this.perfil).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar la skill');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);
  }
}
