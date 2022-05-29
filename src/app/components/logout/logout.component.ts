import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  template: ``,
  styles: [],
})
export class LogoutComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.authService.logout();
    this.messageService.add({
      severity: 'success',
      summary: 'Logout exitoso',
      detail: 'Su sesion ha finalizado correctamente',
    });
    this.router.navigate(['/dashboard']);
  }
}
