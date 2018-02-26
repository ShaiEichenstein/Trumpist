import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Tramp, Driver, Address } from "../models/tramp";

@Component({
  selector: "app-tramp-item",
  templateUrl: "./tramp-item.component.html",
  styleUrls: ["./tramp-item.component.css"]
})
export class TrampItemComponent implements OnInit {
  @Input() tramp: Tramp;
  @Output() sendRequest: EventEmitter<Tramp> = new EventEmitter<Tramp>();
  @Output() cancelRequest: EventEmitter<Tramp> = new EventEmitter<Tramp>();

  isFlip: boolean = false;
  constructor() {}

  ngOnInit() {}

  sendTrampRequest() {
    this.sendRequest.emit(this.tramp);
  }

  cancelTrampRequest() {
    this.cancelRequest.emit(this.tramp);
  }

  flip() {
    this.isFlip = !this.isFlip;
  }
}
