import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { Soft } from 'src/app/model/soft';
import { SkillService } from 'src/app/service/skill.service';
import { SoftService } from 'src/app/service/soft.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];
  soft: Soft[] = [];

  constructor(
    private skillS: SkillService, 
    private softS: SoftService ,
    private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.cargarSoft();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  cargarSoft(): void{
    this.softS.lista().subscribe(
      data => {
        this.soft = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  
  }

  eliminar(id?: number) {
    if (id != undefined) {
      this.softS.delete(id).subscribe(
        (data) => {
          this.cargarSoft();
        },
        (err) => {
          alert('No se puedo realizar la accion');
        }
      );
    }
  }

}
