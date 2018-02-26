import { TrampService } from "./../services/tramp.service";
import { Component, OnInit } from "@angular/core";
import { Tramp } from "../models/tramp";
import { TrampRequest } from "../models/trampRequest";
import { User } from "../models/tramp";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  currentUser: User;
  trampList: Array<Tramp>;
  trampRequestList: Array<TrampRequest>;
  constructor(private trampService: TrampService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  async ngOnInit() {
    this.trampList = await this.trampService.getTramps();
    //this.trampRequestList = this.trampService.getTrampRequestList();
    if (this.trampList != null) {
      this.trampList.sort((n1, n2) => n2.trampGrade - n1.trampGrade);
    }
  }

  showRequests() {
    console.log(this.trampService.getRequests(1234));
  }
}
