import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonaService } from 'src/app/services/Persona.service';
import { ExpLaboral } from '../../models/ExpLaboral';
import { ExpLaboralService } from 'src/app/services/ExpLaboral.service';
import { ExplaboralFormComponent } from './explaboral-form/explaboral-form.component';
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
    private expLaboralService: ExpLaboralService
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
      this.expLaboralService
        .updateExpLaboral(explaboral)
        .subscribe((explaboralBack) => {
          this.explaboral = this.explaboral.map((aux) => {
            if (aux.id === explaboral.id) {
              return explaboralBack;
            }
            return aux;
          });
        });
    } else {
      this.expLaboralService
        .postExpLaboral(explaboral)
        .subscribe((explaboralBack) => {
          this.explaboral.push(explaboralBack);
        });
    }
  }
  eliminarExpLaboral(explaboral: ExpLaboral) {
    this.expLaboralService.deleteExpLaboral(explaboral.id!).subscribe(() => {
      this.explaboral = this.explaboral.filter(
        (aux) => aux.id !== explaboral.id
      );
    });
  }
}
