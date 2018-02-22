import { Component, OnInit, Input } from '@angular/core';
import { Tramp } from '../models/tramp';

@Component({
  selector: 'app-temp-item',
  templateUrl: './temp-item.component.html',
  styleUrls: ['./temp-item.component.css']
})
export class TempItemComponent implements OnInit {

  @Input() tramp: Tramp;
  constructor() { }

  ngOnInit() {
  }

}
