import { Component, OnInit, Input } from '@angular/core';
import { Tramp, Driver, Address } from '../models/tramp';

@Component({
  selector: 'app-tramp-item',
  templateUrl: './tramp-item.component.html',
  styleUrls: ['./tramp-item.component.css']
})
export class TrampItemComponent implements OnInit {

  @Input() tramp:Tramp;
  
  constructor() {
    var address = {
      city: "Tel Aviv",
      naborhood: "zahala",
      street: "rotchild",
      buldingNumber: 2
    }; 
    var driver = {
      driverFirstName : "avi",
      driverLastName : "levi",
      driverAddress : address
    };

    this.tramp = {
     driverDetails: driver,
     entranceAvgTime: new Date(),
     leavingAvgTime: new Date(),
     trampGrade: 10
    }
   }

  ngOnInit() {
  }

}
