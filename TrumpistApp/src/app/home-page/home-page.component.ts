import { TrampService } from './../services/tramp.service';
import { Component, OnInit } from '@angular/core';
import { Tramp } from '../models/tramp';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  trampList: Array<Tramp>;
  constructor(private trampService: TrampService) { }

  ngOnInit() {
    this.trampList = this.trampService.getTramps();
  }

  showRequests() {
    console.log(this.trampService.getRequests(1234));
  }
}
