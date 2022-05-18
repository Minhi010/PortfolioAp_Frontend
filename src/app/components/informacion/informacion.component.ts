import { Component, Input, OnInit } from '@angular/core';
import { Informacion } from 'src/app/models/Informacion';
import { PersonaService } from 'src/app/services/Persona.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
})
export class InformacionComponent implements OnInit {
  informacion?: Informacion;
  constructor(private personaService: PersonaService) {
    this.personaService.getMiPersona().subscribe((persona) => {
      this.informacion = persona.informacion;
    });
  }

  ngOnInit(): void {}
}
