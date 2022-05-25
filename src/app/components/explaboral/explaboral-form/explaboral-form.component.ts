import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpLaboral } from 'src/app/models/ExpLaboral';

@Component({
  selector: 'app-explaboral-form',
  templateUrl: './explaboral-form.component.html',
  styleUrls: ['./explaboral-form.component.css'],
})
export class ExplaboralFormComponent implements OnInit {
  @Output() submitExpLab: EventEmitter<ExpLaboral> = new EventEmitter();
  formulario: FormGroup;
  mostrarForm: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      id: [0],
      trabajo: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      periodo: [
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
          Validators.maxLength(50),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  mostrarFormExp() {
    this.formulario.reset();
    this.mostrarForm = true;
  }
  setFormExp(explaboral: ExpLaboral) {
    this.mostrarFormExp();
    this.formulario.patchValue(explaboral);
  }
  submitFormExp() {
    if (this.formulario.valid) {
      this.submitExpLab.emit(this.formulario.value);
      this.mostrarForm = false;
      this.formulario.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}
