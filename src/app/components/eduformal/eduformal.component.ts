import { Component, OnInit } from '@angular/core';
import { Eduformal } from 'src/app/models/EduFormal';
import { PersonaService } from 'src/app/services/Persona.service';

@Component({
  selector: 'app-eduformal',
  templateUrl: './eduformal.component.html',
  styleUrls: ['./eduformal.component.css'],
})
export class EduformalComponent implements OnInit {
  eduformal: Eduformal[] = [];
  constructor(private personaService: PersonaService) {
    this.personaService.getMiPersona().subscribe((persona) => {
      this.eduformal = persona.eduFormal;
    });
  }

  ngOnInit(): void {}
}
