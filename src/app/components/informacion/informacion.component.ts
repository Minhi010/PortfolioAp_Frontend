import { Component, Input, OnInit } from '@angular/core';
import { Informacion } from 'src/app/models/Informacion';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
})
export class InformacionComponent implements OnInit {
  @Input() atributoInformacion!: Informacion;

  constructor() {}

  ngOnInit(): void {}
}
