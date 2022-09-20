import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/exp/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './components/exp/edit-experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/exp/new-educacion/new-educacion.component';
import { NewExperienciaComponent } from './components/exp/new-experiencia/new-experiencia.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaformacion', component: NewEducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'edithab/:id', component: EditSkillComponent},
  { path: 'nuevahab', component: NewSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
