import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Soft } from 'src/app/model/soft';
import { SoftService } from 'src/app/service/soft.service';

@Component({
  selector: 'app-edit-soft',
  templateUrl: './edit-soft.component.html',
  styleUrls: ['./edit-soft.component.css']
})
export class EditSoftComponent implements OnInit {

  soft: Soft = null;

  constructor(
    private softS: SoftService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.softS.detail(id).subscribe(
      data => {
        this.soft = data;
      }, err => {
        alert('Error al modificar los datos 😡');
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.softS.update(id, this.soft).subscribe(
      data => {
        alert("Skill modificada correctamente! 🎉​ ");
        this.router.navigate(['']);
      }, err => {
        alert('Error al modificar los datos 😡');
        this.router.navigate(['']);
      }
    )
  }

}
