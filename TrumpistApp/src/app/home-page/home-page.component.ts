import { TrampService } from "./../services/tramp.service";
import { Component, OnInit } from "@angular/core";
import { Tramp } from "../models/tramp";
import { TrampRequest, TrampRequestForDisplay } from "../models/trampRequest";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  trampList: Array<Tramp>;
  trampRequestList: Array<TrampRequestForDisplay>;
  constructor(private trampService: TrampService) {}
  
  async ngOnInit() {
    this.trampList = await this.trampService.getTramps();
    this.trampRequestList = await this.trampService.getTrampRequestList();
    if(this.trampRequestList != null){
      console.log("trampRequestList: ");
      console.log(this.trampRequestList[0]);
    }
    
    if (this.trampList != null) {
      this.trampList.sort((n1, n2) => n2.trampGrade - n1.trampGrade);
    }
  }

  showRequests() {
    console.log(this.trampService.getRequests(1234));
  }
}
