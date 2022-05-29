import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Curso } from 'src/app/models/Curso';
import { AuthService } from 'src/app/services/auth.service';
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
    private cursoService: CursoService,
    private messageService: MessageService,
    private authService: AuthService
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
      this.cursoService.updateCurso(curso).subscribe({
        next: (curso) => {
          this.cursos = this.cursos.map((cursoAux) => {
            if (cursoAux.id == curso.id) {
              return curso;
            }
            return cursoAux;
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
      this.cursoService.postCurso(curso).subscribe({
        next: (curso) => {
          this.cursos.push(curso);
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
  eliminarCursoLista(curso: Curso) {
    this.cursoService.deleteCurso(curso.id!).subscribe({
      next: () => {
        this.cursos = this.cursos.filter((cursoAux) => {
          return cursoAux.id != curso.id;
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
  logueado(): boolean {
    return this.authService.isLoggedIn();
  }
}
