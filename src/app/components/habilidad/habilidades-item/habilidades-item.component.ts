import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Habilidad } from 'src/app/models/Habilidad';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-habilidades-item',
  templateUrl: './habilidades-item.component.html',
  styleUrls: ['./habilidades-item.component.css'],
})
export class HabilidadesItemComponent implements OnInit {
  @Input() habilidad!: Habilidad;
  @Output() editarHabilidad: EventEmitter<Habilidad> = new EventEmitter();
  @Output() eliminarHabilidad: EventEmitter<Habilidad> = new EventEmitter();
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  editarHabilidadForm() {
    this.editarHabilidad.emit(this.habilidad);
  }
  eliminarHabilidadForm() {
    this.eliminarHabilidad.emit(this.habilidad);
  }
  logueado(): boolean {
    return this.authService.isLoggedIn();
  }
}
