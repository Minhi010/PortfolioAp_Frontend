import {
  animate,
  transition,
  style,
  trigger,
  keyframes,
} from '@angular/animations';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PersonaService } from 'src/app/services/Persona.service';
import { navbarData } from './nav-data';
import { SideNavToggle } from './SideNavToggle.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate(
          '1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: 0 }),
            style({ transform: 'rotate(2turn)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class SidenavComponent implements OnInit {
  constructor(
    private personaService: PersonaService,
    private authService: AuthService
  ) {}
  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  logueado(): boolean {
    return this.authService.isLoggedIn();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
}
