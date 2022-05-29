import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Curso } from 'src/app/models/Curso';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-curso-item',
  templateUrl: './curso-item.component.html',
  styleUrls: ['./curso-item.component.css'],
})
export class CursoItemComponent implements OnInit {
  @Input() curso!: Curso;
  @Output() editarCurso: EventEmitter<Curso> = new EventEmitter();
  @Output() eliminarCursoEvent: EventEmitter<Curso> = new EventEmitter();
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  editarCursoForm() {
    this.editarCurso.emit(this.curso);
  }
  eliminarCurso() {
    this.eliminarCursoEvent.emit(this.curso);
  }
  logueado(): boolean {
    return this.authService.isLoggedIn();
  }
}
