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
import { NgxTypedJsModule } from 'ngx-typed-js';
import { EduformalItemComponent } from './components/eduformal/eduformal-item/eduformal-item.component';
import { ExplaboralItemComponent } from './components/explaboral/explaboral-item/explaboral-item.component';
import { ButtonModule } from 'primeng/button';
import { HabilidadesItemComponent } from './components/habilidad/habilidades-item/habilidades-item.component';
import { ProyectosItemComponent } from './components/proyecto/proyectos-item/proyectos-item.component';
import { InformacionFormComponent } from './components/informacion/informacion-form/informacion-form.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CursoFormComponent } from './components/curso/curso-form/curso-form.component';
import { LoginComponent } from './components/login/login.component';
import { EduformalFormComponent } from './components/eduformal/eduformal-form/eduformal-form.component';

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
    EduformalItemComponent,
    ExplaboralItemComponent,
    HabilidadesItemComponent,
    ProyectosItemComponent,
    InformacionFormComponent,
    CursoFormComponent,
    LoginComponent,
    EduformalFormComponent,
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
    NgxTypedJsModule,
    ButtonModule,
    DialogModule,
    InputTextareaModule,
    InputTextModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
