import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/Curso';

@Component({
  selector: 'app-curso-item',
  templateUrl: './curso-item.component.html',
  styleUrls: ['./curso-item.component.css'],
})
export class CursoItemComponent implements OnInit {
  @Input() curso!: Curso;

  constructor() {}

  ngOnInit(): void {}
}
