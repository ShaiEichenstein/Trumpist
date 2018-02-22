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
      driverGender: "זכר",
      driverAddress: {
        city: "רמת גן",
        street:"הרצל"
      },
    },
    trampGrade: 75,
    color: '#588952'
  },
  <Tramp>{
    driverDetails: {
      driverLastName: "אפרגן",
      driverFirstName: "דרור",
      driverGender: "זכר",
      driverAddress: {
        city: "תל אביב",
        street:"אלנבי"
      },
    },
    trampGrade: 85,
    color: '#F3AD1A'
    },
  <Tramp>{
    driverDetails: {
      driverLastName: "דפנה",
      driverFirstName: "פאן",
      driverGender: "נקבה",
      driverAddress: {
        city: "חיפה",
        street:"הנביאים"
      },
    },
    trampGrade: 40,
    color: '#BA69C8'
  }
];
