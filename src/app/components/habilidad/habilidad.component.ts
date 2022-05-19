import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/models/Habilidad';
import { PersonaService } from 'src/app/services/Persona.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css'],
})
export class HabilidadComponent implements OnInit {
  habilidades: Habilidad[] = [];
  constructor(private personaService: PersonaService) {
    this.personaService.getMiPersona().subscribe((persona) => {
      this.habilidades = persona.habilidades;
    });
  }

  ngOnInit(): void {}
}
