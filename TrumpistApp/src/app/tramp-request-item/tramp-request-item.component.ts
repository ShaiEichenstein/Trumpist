import { Component, OnInit, Input } from "@angular/core";
import { Tramp, User, Address } from "../models/tramp";
import { TrampRequest } from "../models/trampRequest";
import { TrampService } from "../services/tramp.service";

@Component({
  selector: "app-tramp-request-item",
  templateUrl: "./tramp-request-item.component.html",
  styleUrls: ["./tramp-request-item.component.css"]
})
export class TrampRequestItemComponent implements OnInit {
  @Input() trampRequest: TrampRequest;

  isRequestConfirmed: boolean;
  driverDetails: User;
  passangerDetails: User;

  constructor(private trampService: TrampService) {}

  ngOnInit() {
    this.driverDetails = this.trampService.getUserDetails(
      this.trampRequest.driverUserID
    );
    this.passangerDetails = this.trampService.getUserDetails(
      this.trampRequest.passangerUserID
    );

    if (this.trampRequest.requestStatus === 0) { this.isRequestConfirmed = false; }
    else if (this.trampRequest.requestStatus === 1) {
      this.isRequestConfirmed = true;
    }
  }

  confirmTrampRequest() {
    console.log("request confirmed: " + this.trampRequest.id);
  }
}
