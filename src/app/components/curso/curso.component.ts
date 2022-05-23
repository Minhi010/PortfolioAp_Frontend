import { Component, OnInit, ViewChild } from '@angular/core';
import { Curso } from 'src/app/models/Curso';
import { CursoService } from 'src/app/services/Curso.service';
import { PersonaService } from 'src/app/services/Persona.service';
import { CursoFormComponent } from './curso-form/curso-form.component';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent implements OnInit {
  @ViewChild('cursoForm') cursoForm!: CursoFormComponent;
  cursos: Curso[] = [];
  constructor(
    private personaService: PersonaService,
    private cursoService: CursoService
  ) {
    this.personaService.getMiPersona().subscribe((persona) => {
      this.cursos = persona.cursos;
    });
  }

  ngOnInit(): void {}
  abrirModalHijo() {
    this.cursoForm.abrirFormulario();
  }
  abrirModalHijoEditar(curso: Curso) {
    this.cursoForm.setCursoForm(curso);
  }
  nuevoSubmit(curso: Curso) {
    if (curso.id) {
      this.cursoService.updateCurso(curso).subscribe((curso) => {
        this.cursos = this.cursos.map((cursoAux) => {
          if (cursoAux.id == curso.id) {
            return curso;
          }
          return cursoAux;
        });
      });
    } else {
      this.cursoService.postCurso(curso).subscribe((curso) => {
        this.cursos.push(curso);
      });
    }
  }
  eliminarCursoLista(curso: Curso) {
    this.cursoService.deleteCurso(curso.id!).subscribe(() => {
      this.cursos = this.cursos.filter((cursoAux) => {
        return cursoAux.id != curso.id;
      });
    });
  }
}
