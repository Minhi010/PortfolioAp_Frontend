import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css'],
})
export class EjemploComponent implements OnInit {
  nombre: string = 'Juan';
  constructor() {}

  ngOnInit() {}
}
