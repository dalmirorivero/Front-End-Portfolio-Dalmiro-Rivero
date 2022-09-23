import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/perfil';
import { persona } from 'src/app/model/persona.model';
import { PerfilService } from 'src/app/service/perfil.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  persona: persona = new persona();
  perfil: Perfil[] = [];

  constructor(
    public personaService: PersonaService, 
    private perfilS: PerfilService,
    private tokenService: TokenService
    ) {}

    isLogged = false;

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });

    this.cargarPerfil();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPerfil(): void{
    this.perfilS.lista().subscribe(
      data => {
        this.perfil = data;
      }
    )
  }
}
