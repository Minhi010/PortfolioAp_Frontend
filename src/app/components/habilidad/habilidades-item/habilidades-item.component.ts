import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/models/Habilidad';

@Component({
  selector: 'app-habilidades-item',
  templateUrl: './habilidades-item.component.html',
  styleUrls: ['./habilidades-item.component.css'],
})
export class HabilidadesItemComponent implements OnInit {
  @Input() habilidad!: Habilidad;
  constructor() {}

  ngOnInit(): void {}
}
