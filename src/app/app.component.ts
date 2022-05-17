import { Component } from '@angular/core';
import { Persona } from './models/Persona';
import { PersonaService } from './services/Persona.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Portfolio_front';

  persona!: Persona;

  constructor(private personaService: PersonaService) {
    this.personaService.getMiperfil().subscribe((persona: Persona) => {
      this.persona = persona;
    });
  }

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
