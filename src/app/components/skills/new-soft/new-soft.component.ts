import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Soft } from 'src/app/model/soft';
import { SoftService } from 'src/app/service/soft.service';

@Component({
  selector: 'app-new-soft',
  templateUrl: './new-soft.component.html',
  styleUrls: ['./new-soft.component.css']
})
export class NewSoftComponent implements OnInit {

  sdescripcion: string;
  sporcentaje: number;

  constructor(private softS: SoftService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const soft = new Soft(this.sdescripcion, this.sporcentaje);
    this.softS.save(soft).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
  }

}
