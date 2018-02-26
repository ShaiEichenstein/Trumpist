import { TrampService } from './../services/tramp.service';
import { Component, OnInit } from '@angular/core';
import { Tramp } from '../models/tramp';
import { TrampRequest } from "../models/trampRequst";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  trampList: Array<Tramp>;
  trampRequestList: Array<TrampRequest>;
  constructor(private trampService: TrampService) { }

  async ngOnInit() {
    this.trampList = await this.trampService.getTramps();
    //this.trampRequestList = this.trampService.getTrampRequestList();
  }

  showRequests() {
    console.log(this.trampService.getRequests(1234));
  }
}
