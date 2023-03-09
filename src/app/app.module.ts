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
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';

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
    BtnEditDeleteProyectoComponent,
    PagenotfoundComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
