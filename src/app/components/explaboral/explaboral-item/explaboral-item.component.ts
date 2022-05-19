import { Component, Input, OnInit } from '@angular/core';
import { ExpLaboral } from 'src/app/models/ExpLaboral';

@Component({
  selector: 'app-explaboral-item',
  templateUrl: './explaboral-item.component.html',
  styleUrls: ['./explaboral-item.component.css'],
})
export class ExplaboralItemComponent implements OnInit {
  @Input() explaboral!: ExpLaboral;
  constructor() {}

  ngOnInit(): void {}
}
