import { Injectable } from "@angular/core";
import { Tramp } from "./models/tramp";

@Injectable()
export class TrampService {
  trampList: Array<Tramp>;

  constructor() {
    this.trampList = TrampsMockUp;
  }

  getTramps(): Array<Tramp> {
    return this.trampList;
  }
}

export const TrampsMockUp: Array<Tramp> = [
  <Tramp>{
    driverDetails: {
      driverLastName: "אייכנשטיין",
      driverFirstName: "שי",
      driverGender: "זכר"
    }
  },
  <Tramp>{
    driverDetails: {
      driverLastName: "אייכנשטיין",
      driverFirstName: "2שי",
      driverGender: "זכר"
    }
  },
  <Tramp>{
    driverDetails: {
      driverLastName: "אייכנשטיין",
      driverFirstName: "3שי",
      driverGender: "זכר"
    }
  }
];
