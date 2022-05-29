import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './components/curso/curso.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EduformalComponent } from './components/eduformal/eduformal.component';
import { ExplaboralComponent } from './components/explaboral/explaboral.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'perfil', component: InformacionComponent },
  { path: 'educacion', component: EduformalComponent },
  { path: 'cursos', component: CursoComponent },
  { path: 'experiencia', component: ExplaboralComponent },
  { path: 'habilidades', component: HabilidadComponent },
  { path: 'proyectos', component: ProyectoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
