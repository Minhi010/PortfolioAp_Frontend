import { Component, OnInit } from '@angular/core';
import { EduFormal } from 'src/app/models/EduFormal';
import { PersonaService } from 'src/app/services/Persona.service';

@Component({
  selector: 'app-eduformal',
  templateUrl: './eduformal.component.html',
  styleUrls: ['./eduformal.component.css'],
})
export class EduformalComponent implements OnInit {
  eduFormal: EduFormal[] = [];
  constructor(private personaService: PersonaService) {
    this.personaService.getMiPersona().subscribe((persona) => {
      this.eduFormal = persona.eduFormal;
    });
  }

  ngOnInit(): void {}
}
