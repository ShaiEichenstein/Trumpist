import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Tramp, User, Address } from "../models/tramp";
import { TrampRequest, TrampRequestForDisplay } from "../models/trampRequest";
import { TrampService } from "../services/tramp.service";
import { updateTrampRequest } from "../../server/dal";

@Component({
  selector: "app-tramp-request-item",
  templateUrl: "./tramp-request-item.component.html",
  styleUrls: ["./tramp-request-item.component.css"]
})
export class TrampRequestItemComponent implements OnInit {
  @Input() trampRequest: TrampRequestForDisplay;
  @Output() confirmRequest: EventEmitter<TrampRequestForDisplay> = new EventEmitter<TrampRequestForDisplay>();
  
  isRequestConfirmed: boolean;
  driverDetails: User;
  passangerDetails: User;

  constructor(private trampService: TrampService) {}

  ngOnInit() {
    // this.driverDetails = this.trampService.getUserDetails(
    //   this.trampRequest.driverUserID
    // );
    // this.passangerDetails = this.trampService.getUserDetails(
    //   this.trampRequest.passangerUserID
    // );

    if (this.trampRequest.requestStatus === 0) { this.isRequestConfirmed = false; }
    else if (this.trampRequest.requestStatus === 1) { this.isRequestConfirmed = true; }
  }

  confirmTrampRequest2() {
    console.log("request confirmed: " + this.trampRequest.id);
    //this.trampService.updateTrampRequest(this.getTrampRequestFromTrampRequestForDisplay(this.trampRequest), 2);
  }

  confirmTrampRequest() {
    this.confirmRequest.emit(this.trampRequest);
  }


  // getTrampRequestFromTrampRequestForDisplay(trampRequestForDisplay: TrampRequestForDisplay){
  //   let trampRequest: TrampRequest;
  //   trampRequest.id = trampRequestForDisplay.id;
  //   trampRequest.driverUserID = trampRequestForDisplay.driverUser.userId;
  //   trampRequest.passangerUserID = trampRequestForDisplay.passangerUser.userId;
  //   trampRequest.requestStatus = trampRequestForDisplay.requestStatus;
  //   trampRequest.trampDate = trampRequestForDisplay.trampDate;

  //   return trampRequest;
  // }
}
