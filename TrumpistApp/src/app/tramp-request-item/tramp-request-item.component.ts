import { Component, OnInit, Input } from '@angular/core';
import { Tramp, Driver, Address } from '../models/tramp';
import { TrampRequest } from '../models/trampRequst';
import { TrampService } from '../tramp.service';

@Component({
  selector: 'app-tramp-request-item',
  templateUrl: './tramp-request-item.component.html',
  styleUrls: ['./tramp-request-item.component.css']
})
export class TrampRequestItemComponent implements OnInit {

  @Input() trampRequest: TrampRequest;

  driverDetails: Driver;
  passangerDetails: Driver;

  constructor(private trampService: TrampService) { }

  ngOnInit() {
    this.driverDetails = this.trampService.getUserDetails(this.trampRequest.driverEmpId);
    this.passangerDetails = this.trampService.getUserDetails(this.trampRequest.passangerEmpId);
  }

  confirmTrampRequest(){
    console.log("request confirmed: " + this.trampRequest.id);
  }
}