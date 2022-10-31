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
        alert("Habilidad añadida con exito! 🎉");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al añadir la habilidad 😡");
        this.router.navigate(['']);
      }
    )
  }

}
