import { Tramp, Address } from "./../models/tramp";
import { Component, OnInit, Input } from "@angular/core";
import { TrampService } from "../services/tramp.service";
import { TrampRequest } from "../models/trampRequest";

@Component({
  selector: "app-tramp-list",
  templateUrl: "./tramp-list.component.html",
  styleUrls: ["./tramp-list.component.css"]
})
export class TrampListComponent implements OnInit {
  @Input() trampList: Array<Tramp>;

  activeSortBy: string;

  constructor(private trampService: TrampService) {}

  ngOnInit() {
    this.activeSortBy = "byRank";
    if (this.trampList != null) {
      this.sort("byRank");
    }
  }

  sort(type: string) {
    switch (type) {
      case "byRank":
        this.trampList.sort((n1, n2) => n2.trampGrade - n1.trampGrade);
        break;
        case "byStatus":
        this.trampList.sort((n1, n2) => n2.trampRequestStatus - n1.trampRequestStatus);
        break;
      case "byGender":
        this.trampList.sort((n1, n2) => {
          if (n1.driverDetails.gender > n2.driverDetails.gender) {
            return 1;
          }
          if (n1.driverDetails.gender < n2.driverDetails.gender) {
            return -1;
          }
          return 0;
        });
        break;
      case "byName":
        this.trampList.sort((n1, n2) => {
          if (
            n1.driverDetails.firstName > n2.driverDetails.firstName
          ) {
            return 1;
          }
          if (
            n1.driverDetails.firstName < n2.driverDetails.firstName
          ) {
            return -1;
          }
          return 0;
        });
        break;
    }

    this.activeSortBy = type;
  }

  sendTrampRequstHandler(tramp: Tramp) {
    const trampReq = <TrampRequest>{
      driverUserID: tramp.driverDetails.userId,
      passangerUserID: 37897,
      trampDate: new Date(),
      requestStatus: 1
    };
    this.trampService.sendTrampRequest(trampReq);
  }

  cancelTrampRequstHandler(tramp: Tramp) {
    const trampReq = <TrampRequest>{
      driverUserID: tramp.driverDetails.userId,
      passangerUserID: 37897,
      trampDate: new Date(),
      requestStatus: 0
    };
    this.trampService.updateTrampRequestStatus(trampReq);
  }
}
