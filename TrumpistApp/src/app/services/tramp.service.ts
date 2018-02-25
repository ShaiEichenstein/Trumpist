import { element } from "protractor";
import { TrampRequest } from "./models/trampRequest";
import { Injectable } from "@angular/core";
import { Tramp } from "./../models/tramp";
import { HttpService } from "./http.service";
import { promise } from "protractor";

@Injectable()
export class TrampService {
  trampList: Array<Tramp>;

  constructor(private httpService: HttpService) {
    // this.trampList = TrampsMockUp;
  }

  async getTramps(): Promise<Tramp[]> {
    // return this.trampList;
    let tramps = await this.httpService.requestData<Tramp[]>("api/tremps");
    console.log(tramps);
    return tramps;
    // return this.trampList;
  }

  sendTrampRequest(tramp: Tramp) {
    TrampsRequestMockUp.push(<TrampRequest>{
      driverEmpId: tramp.driverDetails.driverEmpId,
      passangerEmpId: 37897,
      trampDate: new Date(),
      requestStatus: 1
    });
    tramp.trampRequstStatus = 1;
    this.setRequestIcon(new Array<Tramp>(tramp));
  }

  getRequests(userId: number): Array<TrampRequest> {
    return TrampsRequestMockUp;
  }

  setRequestIcon(tramps: Array<Tramp>) {
    tramps.forEach(tramp => {
      switch (tramp.trampRequstStatus) {
        case 0:
          tramp.trampRequestIcon = "open";
          break;
        case 1:
          tramp.trampRequestIcon = "send";
          break;
        case 2:
          tramp.trampRequestIcon = "ok";
          break;
      }
    });
  }
}

export const TrampsMockUp: Array<Tramp> = [
  <Tramp>{
    driverDetails: {
      driverEmpId: 45652,
      driverLastName: "אייכנשטיין",
      driverFirstName: "שי",
      driverGender: "זכר",
      driverAddress: {
        city: "רמת גן",
        street: "הרצל"
      }
    },
    trampGrade: 75,
    color: "#588952",
    trampRequstStatus: 0
  },
  <Tramp>{
    driverDetails: {
      driverEmpId: 37452,
      driverLastName: "אפרגן",
      driverFirstName: "דרור",
      driverGender: "זכר",
      driverAddress: {
        city: "תל אביב",
        street: "אלנבי"
      }
    },
    trampGrade: 85,
    color: "#F3AD1A",
    trampRequstStatus: 0
  },
  <Tramp>{
    driverDetails: {
      driverEmpId: 1234,
      driverLastName: "דפנה",
      driverFirstName: "פאן",
      driverGender: "נקבה",
      driverAddress: {
        city: "חיפה",
        street: "הנביאים"
      }
    },
    trampGrade: 40,
    color: "#BA69C8",
    trampRequstStatus: 0
  },
  <Tramp>{
    driverDetails: {
      driverEmpId: 3432,
      driverLastName: "אסף",
      driverFirstName: "גאן",
      driverGender: "זכר",
      driverAddress: {
        city: "חיפה",
        street: "אלנבי"
      }
    },
    trampGrade: 60,
    color: "#F3AD1A",
    trampRequstStatus: 0
  },
  <Tramp>{
    driverDetails: {
      driverEmpId: 1232,
      driverLastName: "מירב",
      driverFirstName: "בוכריס",
      driverGender: "נקבה",
      driverAddress: {
        city: "אילת",
        street: "הנביאים"
      }
    },
    trampGrade: 67,
    color: "#BA69C8",
    trampRequstStatus: 1
  }
];

export let TrampsRequestMockUp: Array<TrampRequest> = new Array<TrampRequest>();
