import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/models/Habilidad';

@Component({
  selector: 'app-habilidad-form',
  templateUrl: './habilidad-form.component.html',
  styleUrls: ['./habilidad-form.component.css'],
})
export class HabilidadFormComponent implements OnInit {
  formulario: FormGroup;
  @Output() submitFormHabilidad: EventEmitter<Habilidad> = new EventEmitter();
  mostrarFormulario: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      id: [0],
      tecnologia: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      nivel: [
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
    });
  }

  ngOnInit(): void {}
  abrirFormulario() {
    this.formulario.reset();
    this.mostrarFormulario = true;
  }
  setHabilidadForm(habilidad: Habilidad) {
    this.abrirFormulario();
    console.log(habilidad);
    this.formulario.patchValue(habilidad);
  }
  submitHabilidad() {
    if (this.formulario.valid) {
      this.submitFormHabilidad.emit(this.formulario.value);
      this.mostrarFormulario = false;
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}
