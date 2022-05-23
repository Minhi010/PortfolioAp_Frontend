import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
    fechaNacimiento: new Date(),
    nacionalidad: '',
    ocupacion: '',
    mail: '',
    descripcion: '',
    foto: '',
  };
  @ViewChild('informacionForm') informacionForm!: InformacionFormComponent;

  constructor(
    private personaService: PersonaService,
    private informacionService: InformacionService
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
    console.log(informacion);
    this.informacionService
      .updateInformacion(informacion)
      .subscribe((newInformacion) => {
        this.informacion = newInformacion;
        /*toast de confirmacion o de error dependiendo de newinformacion*/
      });
  }
}
