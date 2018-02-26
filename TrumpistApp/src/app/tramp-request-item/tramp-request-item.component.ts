import { Component, OnInit, Input } from '@angular/core';
import { Tramp, Driver, Address } from '../models/tramp';
import { TrampRequest } from '../models/trampRequest';
import { TrampService } from '../services/tramp.service';

@Component({
  selector: 'app-tramp-request-item',
  templateUrl: './tramp-request-item.component.html',
  styleUrls: ['./tramp-request-item.component.css']
})
export class TrampRequestItemComponent implements OnInit {

  @Input() trampRequest: TrampRequest;

  driverDetails: Driver;
  passangerDetails: Driver;
  isRequestConfirmed: boolean;

  constructor(private trampService: TrampService) { }

  ngOnInit() {
    this.driverDetails = this.trampService.getUserDetails(this.trampRequest.driverEmpId);
    this.passangerDetails = this.trampService.getUserDetails(this.trampRequest.passangerEmpId);

    if (this.trampRequest.requestStatus == 0)
      this.isRequestConfirmed=false;
    else if (this.trampRequest.requestStatus == 1)
      this.isRequestConfirmed=true;
  }

  confirmTrampRequest(){
    console.log("request confirmed: " + this.trampRequest.id);
  }
}
