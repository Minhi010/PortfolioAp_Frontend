import { Component, OnInit, ViewChild } from '@angular/core';
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
    private habilidadService: HabilidadService
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
  eliminarHabilidad(habilidad: Habilidad) {
    this.habilidadService.deleteHabilidad(habilidad.id!).subscribe(() => {
      this.habilidades = this.habilidades.filter((habilidadAux) => {
        return habilidadAux.id != habilidad.id;
      });
    });
  }
  nuevoSubmit(habilidad: Habilidad) {
    if (habilidad.id) {
      this.habilidadService
        .updateHabilidad(habilidad)
        .subscribe((habilidad) => {
          this.habilidades = this.habilidades.map((habilidadBack) => {
            if (habilidadBack.id == habilidad.id) {
              return habilidad;
            }
            return habilidadBack;
          });
        });
    } else {
      this.habilidadService.postHabilidad(habilidad).subscribe((habilidad) => {
        this.habilidades.push(habilidad);
      });
    }
  }
}
