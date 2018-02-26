import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Tramp, User, Address } from "../models/tramp";

@Component({
  selector: "app-tramp-item",
  templateUrl: "./tramp-item.component.html",
  styleUrls: ["./tramp-item.component.css"]
})
export class TrampItemComponent implements OnInit {
  @Input() tramp: Tramp;
  @Output() sendRequest: EventEmitter<Tramp> = new EventEmitter<Tramp>();

  constructor() {}

  ngOnInit() {}

  sendTrempRequest() {
    this.sendRequest.emit(this.tramp);
  }
}
