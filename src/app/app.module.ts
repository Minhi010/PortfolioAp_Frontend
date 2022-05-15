import { SliderModule } from 'primeng/slider';
import { RadioButtonModule } from 'primeng/radiobutton';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { CursoComponent } from './components/curso/curso.component';
import { EduformalComponent } from './components/eduformal/eduformal.component';
import { ExplaboralComponent } from './components/explaboral/explaboral.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SidebarComponent, InformacionComponent, CursoComponent, EduformalComponent, ExplaboralComponent, HabilidadComponent, ProyectoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SliderModule,
    RadioButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
