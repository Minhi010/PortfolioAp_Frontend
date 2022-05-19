import { Component, Input, OnInit } from '@angular/core';
import { EduFormal } from 'src/app/models/EduFormal';

@Component({
  selector: 'app-eduformal-item',
  templateUrl: './eduformal-item.component.html',
  styleUrls: ['./eduformal-item.component.css'],
})
export class EduformalItemComponent implements OnInit {
  @Input() eduFormal!: EduFormal;
  constructor() {}

  ngOnInit(): void {}
}
