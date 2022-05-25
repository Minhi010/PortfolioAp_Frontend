import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Habilidad } from 'src/app/models/Habilidad';
import { HabilidadService } from 'src/app/services/Habilidad.service';
import { PersonaService } from 'src/app/services/Persona.service';
import { HabilidadFormComponent } from './habilidad-form/habilidad-form.component';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css'],
})
export class HabilidadComponent implements OnInit {
  habilidades: Habilidad[] = [];
  @ViewChild('habilidadForm') habilidadForm!: HabilidadFormComponent;
  constructor(
    private personaService: PersonaService,
    private habilidadService: HabilidadService,
    private messageService: MessageService
  ) {
    this.personaService.getMiPersona().subscribe((persona) => {
      this.habilidades = persona.habilidades;
    });
  }

  ngOnInit(): void {}
  abrirModalHijo() {
    this.habilidadForm.abrirFormulario();
  }
  abrirModalHijoEditar(habilidad: Habilidad) {
    this.habilidadForm.setHabilidadForm(habilidad);
  }
  nuevoSubmit(habilidad: Habilidad) {
    if (habilidad.id) {
      this.habilidadService.updateHabilidad(habilidad).subscribe({
        next: (habilidad) => {
          this.habilidades = this.habilidades.map((habilidadBack) => {
            if (habilidadBack.id == habilidad.id) {
              return habilidad;
            }
            return habilidadBack;
          });
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
      this.habilidadService.postHabilidad(habilidad).subscribe({
        next: (habilidad) => {
          this.habilidades.push(habilidad);
          this.messageService.add({
            severity: 'success',
            summary: 'Creación exitosa',
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
  eliminarHabilidad(habilidad: Habilidad) {
    this.habilidadService.deleteHabilidad(habilidad.id!).subscribe({
      next: () => {
        this.habilidades = this.habilidades.filter((habilidadAux) => {
          return habilidadAux.id != habilidad.id;
        });
        this.messageService.add({
          severity: 'success',
          summary: 'Eliminación exitosa',
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
}
