import { Component, OnInit, ViewChild } from '@angular/core';
import { EduFormal } from 'src/app/models/EduFormal';
import { EduFormalService } from 'src/app/services/EduFormal.service';
import { PersonaService } from 'src/app/services/Persona.service';
import { EduformalFormComponent } from './eduformal-form/eduformal-form.component';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-eduformal',
  templateUrl: './eduformal.component.html',
  styleUrls: ['./eduformal.component.css'],
})
export class EduformalComponent implements OnInit {
  @ViewChild('eduFormalForm') eduFormalForm!: EduformalFormComponent;
  eduFormal: EduFormal[] = [];
  constructor(
    private personaService: PersonaService,
    private eduFormalService: EduFormalService,
    private messageService: MessageService
  ) {
    this.personaService.getMiPersona().subscribe((persona) => {
      this.eduFormal = persona.eduFormal;
    });
  }

  ngOnInit(): void {}
  abrirModalHijo() {
    this.eduFormalForm.mostrarFormEdu();
  }
  abrirModalHijoEditar(eduFormal: EduFormal) {
    this.eduFormalForm.setFormEdu(eduFormal);
  }

  submitEduFormal(eduFormal: EduFormal) {
    if (eduFormal.id) {
      this.eduFormalService.updateEduformal(eduFormal).subscribe({
        next: (eduFormalBack) => {
          this.eduFormal = this.eduFormal.map((aux) => {
            if (aux.id === eduFormal.id) {
              return eduFormalBack;
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
      this.eduFormalService.postEduformal(eduFormal).subscribe({
        next: (eduFormalBack) => {
          this.eduFormal.push(eduFormalBack);
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

  eliminarEduFormal(eduFormal: EduFormal) {
    this.eduFormalService.deleteEduformal(eduFormal.id!).subscribe({
      next: () => {
        this.eduFormal = this.eduFormal.filter(
          (aux) => aux.id !== eduFormal.id
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
