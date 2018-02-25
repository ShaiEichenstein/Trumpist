import { Tramp, Address } from "./../models/tramp";
import { Component, OnInit, Input } from "@angular/core";
import { TrampService } from "../services/tramp.service";

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
    if (this.trampList != null) {
      this.sort("byRank");
    }
  }

  sort(type: string) {
    switch (type) {
      case "byRank":
        this.trampList.sort((n1, n2) => n2.trampGrade - n1.trampGrade);
        break;
      case "byGender":
        this.trampList.sort((n1, n2) => {
          if (n1.driverDetails.driverGender > n2.driverDetails.driverGender) {
            return 1;
          }
          if (n1.driverDetails.driverGender < n2.driverDetails.driverGender) {
            return -1;
          }
          return 0;
        });
        break;
      case "byName":
        this.trampList.sort((n1, n2) => {
          if (
            n1.driverDetails.driverFirstName > n2.driverDetails.driverFirstName
          ) {
            return 1;
          }
          if (
            n1.driverDetails.driverFirstName < n2.driverDetails.driverFirstName
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
    this.trampService.sendTrampRequest(tramp);
  }
}
