import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Proyecto } from 'src/app/models/Proyecto';
import { AuthService } from 'src/app/services/auth.service';
import { PersonaService } from 'src/app/services/Persona.service';
import { ProyectoService } from '../../services/Proyecto.service';
import { ProyectoFormComponent } from './proyecto-form/proyecto-form.component';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
})
export class ProyectoComponent implements OnInit {
  @ViewChild('proyectoForm') proyectoForm!: ProyectoFormComponent;
  proyectos: Proyecto[] = [];
  constructor(
    private personaService: PersonaService,
    private proyectoService: ProyectoService,
    private messageService: MessageService,
    private authService: AuthService
  ) {
    this.personaService.getMiPersona().subscribe((persona) => {
      this.proyectos = persona.proyectos;
    });
  }

  ngOnInit(): void {}
  abrirModalHijo() {
    this.proyectoForm.abrirFormulario();
  }
  abrirModalHijoEditar(proyecto: Proyecto) {
    this.proyectoForm.setProyecto(proyecto);
  }
  nuevoSubmit(proyecto: Proyecto) {
    if (proyecto.id) {
      this.proyectoService.updateProyecto(proyecto).subscribe({
        next: (proyecto) => {
          this.proyectos = this.proyectos.map((p) =>
            p.id === proyecto.id ? proyecto : p
          );
          this.messageService.add({
            severity: 'success',
            summary: 'Actualizacion exitosa',
            detail: 'Su elemento ha sido actualizado exitosamente',
          });
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Ha ocurrido un error',
            detail: 'Su elemento no ha sido actualizado',
          });
        },
      });
    } else {
      this.proyectoService.postProyecto(proyecto).subscribe({
        next: (proyecto) => {
          this.proyectos.push(proyecto);
          this.messageService.add({
            severity: 'success',
            summary: 'Creaci??n exitosa',
            detail: 'Su elemento ha sido creado exitosamente',
          });
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Ha ocurrido un error',
            detail: 'Su elemento no ha sido creado',
          });
        },
      });
    }
  }
  eliminarProyecto(proyecto: Proyecto) {
    this.proyectoService.deleteProyecto(proyecto.id!).subscribe({
      next: () => {
        this.proyectos = this.proyectos.filter((p) => p.id !== proyecto.id);
        this.messageService.add({
          severity: 'success',
          summary: 'Eliminaci??n exitosa',
          detail: 'Su elemento ha sido eliminado exitosamente',
        });
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Ha ocurrido un error',
          detail: 'Su elemento no ha sido eliminado',
        });
      },
    });
  }
  logueado(): boolean {
    return this.authService.isLoggedIn();
  }
}
