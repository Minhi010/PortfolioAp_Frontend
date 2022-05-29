import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  Submit() {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe({
        next: (result) => {
          this.router.navigate(['/dashboard']);
          this.messageService.add({
            severity: 'success',
            summary: 'Login exitoso',
            detail: 'Se ha logueado correctamente',
          });
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'No es posible iniciar sesion',
            detail: 'El usuario o la contraseña son incorrectos',
          });
          this.form.reset();
        },
      });
    }
  }
}
