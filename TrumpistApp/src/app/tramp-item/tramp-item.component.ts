import { Component, OnInit, Input } from '@angular/core';
import { Tramp, Driver } from '../models/tramp';

@Component({
  selector: 'app-tramp-item',
  templateUrl: './tramp-item.component.html',
  styleUrls: ['./tramp-item.component.css']
})
export class TrampItemComponent implements OnInit {

  @Input() tramp:Tramp;
  constructor() { }

  ngOnInit() {
  }

}
