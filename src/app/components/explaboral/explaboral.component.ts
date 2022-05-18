import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/Persona.service';
import { ExpLaboral } from '../../models/ExpLaboral';

@Component({
  selector: 'app-explaboral',
  templateUrl: './explaboral.component.html',
  styleUrls: ['./explaboral.component.css'],
})
export class ExplaboralComponent implements OnInit {
  explaboral: ExpLaboral[] = [];
  constructor(private personaService: PersonaService) {
    this.personaService.getMiPersona().subscribe((persona) => {
      this.explaboral = persona.expLaboral;
    });
  }
  ngOnInit(): void {}
}
