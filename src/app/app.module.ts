import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RedesComponent } from './components/redes/redes.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { FooterComponent } from './components/footer/footer.component';
import { BtnEditComponent } from './components/btn-edit/btn-edit.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { BtnUpComponent } from './components/btn-up/btn-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProyectosComponent,
    RedesComponent,
    BienvenidaComponent,
    FooterComponent,
    BtnEditComponent,
    SkillsComponent,
    EducacionComponent,
    BtnUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
