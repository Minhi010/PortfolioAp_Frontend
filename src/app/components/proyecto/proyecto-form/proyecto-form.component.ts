import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-proyecto-form',
  templateUrl: './proyecto-form.component.html',
  styleUrls: ['./proyecto-form.component.css'],
})
export class ProyectoFormComponent implements OnInit {
  mostrarFormulario: boolean = false;
  formulario: FormGroup;
  @Output() submitProyecto: EventEmitter<Proyecto> = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      id: [0],
      nombre: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3),
        ],
      ],
      enlace: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3),
        ],
      ],
      fecha: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3),
        ],
      ],
      descripcion: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  submitProyectoForm() {
    if (this.formulario.valid) {
      this.submitProyecto.emit(this.formulario.value);
      this.mostrarFormulario = false;
      this.formulario.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }
  abrirFormulario() {
    this.mostrarFormulario = true;
    this.formulario.reset();
  }
  setProyecto(proyecto: Proyecto) {
    this.abrirFormulario();
    this.formulario.patchValue(proyecto);
  }
}
