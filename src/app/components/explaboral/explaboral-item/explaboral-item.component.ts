import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { ExpLaboral } from 'src/app/models/ExpLaboral';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-explaboral-item',
  templateUrl: './explaboral-item.component.html',
  styleUrls: ['./explaboral-item.component.css'],
})
export class ExplaboralItemComponent implements OnInit {
  @Input() explaboral!: ExpLaboral;
  @Output() editarExplaboral: EventEmitter<ExpLaboral> = new EventEmitter();
  @Output() eliminarExplaboral: EventEmitter<ExpLaboral> = new EventEmitter();
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  editarExp() {
    this.editarExplaboral.emit(this.explaboral);
  }
  eliminarExp() {
    this.eliminarExplaboral.emit(this.explaboral);
  }
  logueado(): boolean {
    return this.authService.isLoggedIn();
  }
}
