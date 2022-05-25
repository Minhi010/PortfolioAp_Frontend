import { Component, OnInit, ViewChild } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { PersonaService } from 'src/app/services/Persona.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
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
    private proyectoService: ProyectoService
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
  eliminarProyecto(proyecto: Proyecto) {
    this.proyectoService.deleteProyecto(proyecto.id!).subscribe(() => {
      this.proyectos = this.proyectos.filter((p) => p.id !== proyecto.id);
    });
  }
  nuevoSubmit(proyecto: Proyecto) {
    if (proyecto.id) {
      this.proyectoService.updateProyecto(proyecto).subscribe((proyecto) => {
        this.proyectos = this.proyectos.map((p) =>
          p.id === proyecto.id ? proyecto : p
        );
      });
    } else {
      this.proyectoService.postProyecto(proyecto).subscribe((proyecto) => {
        this.proyectos.push(proyecto);
      });
    }
  }
}
