import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Informacion } from 'src/app/models/Informacion';

@Component({
  selector: 'app-informacion-form',
  templateUrl: './informacion-form.component.html',
  styleUrls: ['./informacion-form.component.css'],
})
export class InformacionFormComponent implements OnInit {
  @Output() editForm: EventEmitter<Informacion> = new EventEmitter();
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
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      fechaNacimiento: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      nacionalidad: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      ocupacion: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      mail: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      descripcion: '',
      foto: '',
    });
  }

  ngOnInit(): void {}
  mostrarFormulario(informacion: Informacion) {
    this.mostrarForm = true;

    this.formulario.patchValue(informacion);
  }
  submitFormulario() {
    if (this.formulario.valid) {
      this.editForm.emit(this.formulario.value);
      this.mostrarForm = false;
      this.formulario.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}
