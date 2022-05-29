import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Informacion } from 'src/app/models/Informacion';
import { InformacionService } from 'src/app/services/Informacion.service';
import { PersonaService } from 'src/app/services/Persona.service';
import { InformacionFormComponent } from './informacion-form/informacion-form.component';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
})
export class InformacionComponent implements OnInit {
  informacion: Informacion = {
    id: 0,
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    nacionalidad: '',
    ocupacion: '',
    mail: '',
    descripcion: '',
    foto: '',
  };
  @ViewChild('informacionForm') informacionForm!: InformacionFormComponent;

  constructor(
    private personaService: PersonaService,
    private informacionService: InformacionService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.personaService.getMiPersona().subscribe((persona) => {
      this.informacion = persona.informacion;
    });
  }
  abrirModalHijo() {
    this.informacionForm.mostrarFormulario(this.informacion);
  }
  editInfo(informacion: Informacion) {
    this.informacionService.updateInformacion(informacion).subscribe({
      next: (newInformacion) => {
        this.informacion = newInformacion;
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
  }
}
