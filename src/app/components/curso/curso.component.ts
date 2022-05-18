import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/Curso';
import { PersonaService } from 'src/app/services/Persona.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent implements OnInit {
  cursos: Curso[] = [];
  constructor(private personaService: PersonaService) {
    this.personaService.getMiPersona().subscribe((persona) => {
      this.cursos = persona.cursos;
    });
  }

  ngOnInit(): void {}
}
