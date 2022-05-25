import { Component, OnInit, ViewChild } from '@angular/core';
import { EduFormal } from 'src/app/models/EduFormal';
import { EduFormalService } from 'src/app/services/EduFormal.service';
import { PersonaService } from 'src/app/services/Persona.service';
import { EduformalFormComponent } from './eduformal-form/eduformal-form.component';

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
    private eduFormalService: EduFormalService
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
      this.eduFormalService
        .updateEduformal(eduFormal)
        .subscribe((eduFormalBack) => {
          this.eduFormal = this.eduFormal.map((aux) => {
            if (aux.id === eduFormal.id) {
              return eduFormalBack;
            }
            return aux;
          });
        });
    } else {
      this.eduFormalService
        .postEduformal(eduFormal)
        .subscribe((eduFormalBack) => {
          this.eduFormal.push(eduFormalBack);
        });
    }
  }

  eliminarEduFormal(eduFormal: EduFormal) {
    this.eduFormalService.deleteEduformal(eduFormal.id!).subscribe(() => {
      this.eduFormal = this.eduFormal.filter((aux) => aux.id !== eduFormal.id);
    });
  }
}
