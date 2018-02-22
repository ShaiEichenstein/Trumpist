import { Tramp } from './../models/tramp';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tramp-list',
  templateUrl: './tramp-list.component.html',
  styleUrls: ['./tramp-list.component.css']
})
export class TrampListComponent implements OnInit {

  @Input() trampList: Array<Tramp>;
  constructor() {
    this.trampList = new Array<Tramp>();
    this.trampList.push(<Tramp>{
      driverDetails : {
        driverFirstName: 'dror',
        driverLastName: 'af'
      }
    });
    this.trampList.push(<Tramp>{
      driverDetails : {
        driverFirstName: 'gil',
        driverLastName: 'af'
      }
    });

   }

  ngOnInit() {
  }

}
