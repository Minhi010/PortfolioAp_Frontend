import { SliderModule } from 'primeng/slider';
import { RadioButtonModule } from 'primeng/radiobutton';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformacionComponent } from './components/informacion/informacion.component';
import { CursoComponent } from './components/curso/curso.component';
import { EduformalComponent } from './components/eduformal/eduformal.component';
import { ExplaboralComponent } from './components/explaboral/explaboral.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { SkeletonModule } from 'primeng/skeleton';
import { BodyComponent } from './components/body/body.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CursoItemComponent } from './components/curso/curso-item/curso-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent,
    CursoComponent,
    EduformalComponent,
    ExplaboralComponent,
    HabilidadComponent,
    ProyectoComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    CursoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SliderModule,
    RadioButtonModule,
    SkeletonModule,
    ProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
