import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RedesComponent } from './components/redes/redes.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { BtnUpComponent } from './components/btn-up/btn-up.component';
import { BtnAddComponent } from './components/btn-add/btn-add.component';
import { BtnEditDeleteEducacionComponent } from './components/educacion/btn-edit-delete-educacion/btn-edit-delete-educacion.component';
import { BtnEditDeleteSkillComponent } from './components/skills/btn-edit-delete-skill/btn-edit-delete-skill.component';
import { BtnEditDeleteProyectoComponent } from './components/proyectos/btn-edit-delete-proyecto/btn-edit-delete-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProyectosComponent,
    RedesComponent,
    BienvenidaComponent,
    FooterComponent,
    SkillsComponent,
    EducacionComponent,
    BtnUpComponent,
    BtnAddComponent,
    BtnEditDeleteEducacionComponent,
    BtnEditDeleteSkillComponent,
    BtnEditDeleteProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
