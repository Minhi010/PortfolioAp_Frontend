import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EduFormal } from 'src/app/models/EduFormal';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-eduformal-item',
  templateUrl: './eduformal-item.component.html',
  styleUrls: ['./eduformal-item.component.css'],
})
export class EduformalItemComponent implements OnInit {
  @Input() eduFormal!: EduFormal;
  @Output() editarEduFormal: EventEmitter<EduFormal> = new EventEmitter();
  @Output() eliminarEduFormal: EventEmitter<EduFormal> = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  editarEdu() {
    this.editarEduFormal.emit(this.eduFormal);
  }
  eliminarEdu() {
    this.eliminarEduFormal.emit(this.eduFormal);
  }
  logueado(): boolean {
    return this.authService.isLoggedIn();
  }
}
