import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/models/Curso';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css'],
})
export class CursoFormComponent implements OnInit {
  @Output() submitFormCurso: EventEmitter<Curso> = new EventEmitter();
  formulario: FormGroup;
  mostrarForm: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      id: [0],
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      institucion: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      descripcion: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(240),
        ],
      ],
      duracion: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      foto: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  abrirFormulario() {
    this.formulario.reset();
    this.mostrarForm = true;
  }
  setCursoForm(curso: Curso) {
    this.abrirFormulario();
    this.formulario.patchValue(curso);
  }
  submitFormulario() {
    if (this.formulario.valid) {
      this.submitFormCurso.emit(this.formulario.value);
      this.mostrarForm = false;
      this.formulario.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}
