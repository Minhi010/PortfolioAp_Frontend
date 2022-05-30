import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EduFormal } from 'src/app/models/EduFormal';

@Component({
  selector: 'app-eduformal-form',
  templateUrl: './eduformal-form.component.html',
  styleUrls: ['./eduformal-form.component.css'],
})
export class EduformalFormComponent implements OnInit {
  formulario: FormGroup;
  mostrarForm: boolean = false;
  @Output() submitEduFormal: EventEmitter<EduFormal> = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      id: [0],
      titulo: [
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
      foto: ['', [Validators.required]],
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
          Validators.maxLength(240),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  mostrarFormEdu() {
    this.mostrarForm = true;
    this.formulario.reset();
  }
  setFormEdu(eduformal: EduFormal) {
    this.mostrarFormEdu();
    this.formulario.patchValue(eduformal);
  }
  submitFormEdu() {
    if (this.formulario.valid) {
      this.submitEduFormal.emit(this.formulario.value);
      this.formulario.reset();
      this.mostrarForm = false;
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}
