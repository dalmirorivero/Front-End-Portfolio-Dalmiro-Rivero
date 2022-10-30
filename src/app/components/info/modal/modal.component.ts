import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  persona: persona = null;

  constructor(
    private personaS: PersonaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.detail(id).subscribe(
      (data) => {
        this.persona = data;
      }, (err) => {
        alert ('error');
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.update(id, this.persona).subscribe(
      data => {
        alert ("Bio modificada correctamente! 🎉");
        this.router.navigate(['']);
      }, err => {
        alert ('Error al modificar la bio del usuario 😡');
        this.router.navigate(['']);
      }
    )
  }


}
