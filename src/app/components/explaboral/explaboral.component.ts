import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonaService } from 'src/app/services/Persona.service';
import { ExpLaboral } from '../../models/ExpLaboral';
import { ExpLaboralService } from 'src/app/services/ExpLaboral.service';
import { ExplaboralFormComponent } from './explaboral-form/explaboral-form.component';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-explaboral',
  templateUrl: './explaboral.component.html',
  styleUrls: ['./explaboral.component.css'],
})
export class ExplaboralComponent implements OnInit {
  @ViewChild('explaboralForm') explaboralForm!: ExplaboralFormComponent;
  explaboral: ExpLaboral[] = [];
  constructor(
    private personaService: PersonaService,
    private expLaboralService: ExpLaboralService,
    private messageService: MessageService
  ) {
    this.personaService.getMiPersona().subscribe((persona) => {
      this.explaboral = persona.expLaboral;
    });
  }
  ngOnInit(): void {}
  abrirModalHijo() {
    this.explaboralForm.mostrarFormExp();
  }
  abrirModalHijoEditar(explaboral: ExpLaboral) {
    this.explaboralForm.setFormExp(explaboral);
  }
  submitExpLab(explaboral: ExpLaboral) {
    if (explaboral.id) {
      this.expLaboralService.updateExpLaboral(explaboral).subscribe({
        next: (explaboralBack) => {
          this.explaboral = this.explaboral.map((aux) => {
            if (aux.id === explaboral.id) {
              return explaboralBack;
            }
            return aux;
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
      this.expLaboralService.postExpLaboral(explaboral).subscribe({
        next: (explaboralBack) => {
          this.explaboral.push(explaboralBack);
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
  eliminarExpLaboral(explaboral: ExpLaboral) {
    this.expLaboralService.deleteExpLaboral(explaboral.id!).subscribe({
      next: () => {
        this.explaboral = this.explaboral.filter(
          (aux) => aux.id !== explaboral.id
        );
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
