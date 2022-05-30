import { Component, OnInit } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/Persona.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  cargando: boolean = true;
  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService
      .getMiPersona()
      .pipe(retry(10000))
      .subscribe((persona) => {
        this.cargando = false;
      });
  }
}
