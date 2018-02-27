import { TrampService } from "./../services/tramp.service";
import { Component, OnInit } from "@angular/core";
import { Tramp } from "../models/tramp";
import { User } from "../models/tramp";
import { TrampRequest, TrampRequestForDisplay } from "../models/trampRequest";
import { LoginService } from "../services/login.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  currentUser: User;
  trampList: Array<Tramp>;
  trampRequestList: Array<TrampRequestForDisplay>;
  constructor(
    private trampService: TrampService,
    private loginService: LoginService
  ) {
    // this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  async ngOnInit() {
    //setInterval(this.refresh(), 3000);

   // this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    //this.trampList = await this.trampService.getTramps(this.currentUser.userId);
    this.trampRequestList = await this.trampService.getTrampRequestList(
      this.currentUser
    );

    if (this.trampRequestList != null) {
      console.log("trampRequestList: ");
      console.log(this.trampRequestList[0]);
    }

    if (this.trampList != null) {
      this.trampList.sort((n1, n2) => n2.trampGrade - n1.trampGrade);
      this.trampList = this.trampList.filter(n1 => n1.trampGrade !== 0);
    }
  }

  showRequests() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.trampService.getRequests(this.currentUser.userId));
  }

  async refresh() {}

  async getUserReqHandler(userId: number) {
    console.log("GET USER HANDLER");
    try {
      await this.loginService.getUser(userId);
      // this.isAuthenticated = true;
    } catch {
      //this.isAuthenticated = false;
      console.log("no such User:" + userId);
    }
  }
}
