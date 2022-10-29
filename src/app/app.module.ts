import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RedesComponent } from './components/redes/redes.component';
import { BannerComponent } from './components/banner/banner.component';
import { InfoComponent } from './components/info/info.component';
import { ExpComponent } from './components/exp/exp.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/exp/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/exp/edit-experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/exp/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/exp/edit-educacion/edit-educacion.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';
import { EditSoftComponent } from './components/skills/edit-soft/edit-soft.component';
import { NewSoftComponent } from './components/skills/new-soft/new-soft.component';
import { EditarComponent } from './components/info/editar/editar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ModalComponent } from './components/info/modal/modal.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RedesComponent,
    BannerComponent,
    InfoComponent,
    ExpComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditSoftComponent,
    NewSoftComponent,
    EditarComponent,
    ModalComponent,
    
    
   

    
    
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideStorage(() => getStorage())],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
