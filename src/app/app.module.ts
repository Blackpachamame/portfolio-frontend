import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RedesComponent } from './components/redes/redes.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProyectosComponent,
    RedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
