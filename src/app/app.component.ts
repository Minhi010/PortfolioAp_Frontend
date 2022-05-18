import { Component } from '@angular/core';
import { Persona } from './models/Persona';
import { PersonaService } from './services/Persona.service';
import { SideNavToggle } from './components/sidenav/SideNavToggle.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Portfolio_front';

  persona!: Persona;

  constructor() {}

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
