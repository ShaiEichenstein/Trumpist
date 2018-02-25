import { Injectable } from "@angular/core";
import { Tramp } from "./../models/tramp";
import { HttpService } from "./http.service";
import { promise } from "protractor";


@Injectable()
export class TrampService {
  trampList: Array<Tramp>;

  constructor(private httpService:HttpService) {
    this.trampList = TrampsMockUp;
    
  }

  async getTramps(): Promise<Tramp[]> {
    //return this.trampList;
     let tramps = await this.httpService.requestGetData<Tramp[]>("api/tramps");
     console.log(tramps);
     return tramps;
     //return this.trampList;
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
  },
  <Tramp>{
    driverDetails: {
      driverLastName: "אסף",
      driverFirstName: "גאן",
      driverGender: "זכר",
      driverAddress: {
        city: "חיפה",
        street:"אלנבי"
      },
    },
    trampGrade: 60,
    color: '#F3AD1A'
  },
  <Tramp>{
    driverDetails: {
      driverLastName: "מירב",
      driverFirstName: "בוכריס",
      driverGender: "נקבה",
      driverAddress: {
        city: "אילת",
        street:"הנביאים"
      },
    },
    trampGrade: 67,
    color: '#BA69C8'
  }
];
