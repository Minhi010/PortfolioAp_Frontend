import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css'],
})
export class ProyectosItemComponent implements OnInit {
  @Input() proyecto!: Proyecto;
  @Output() editarProyecto: EventEmitter<Proyecto> = new EventEmitter();
  @Output() eliminarProyecto: EventEmitter<Proyecto> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  editarProyectoForm() {
    this.editarProyecto.emit(this.proyecto);
  }
  eliminarProyectoForm() {
    this.eliminarProyecto.emit(this.proyecto);
  }
}
