import { element } from "protractor";
import { Injectable } from "@angular/core";
import { Tramp } from "./../models/tramp";
import { HttpService } from "./http.service";
import { promise } from "protractor";
import { TrampRequest } from "../models/trampRequest";
import { Driver } from "../models/tramp";

@Injectable()
export class TrampService {
  trampList: Array<Tramp>;

  constructor(private httpService: HttpService) {
    // this.trampList = TrampsMockUp;
  }

  async getTramps(): Promise<Tramp[]> {
    // return this.trampList;
    const tramps = await this.httpService.requestGetData<Tramp[]>("api/tramps");
    console.log(tramps);
    this.setRequestAdditionalData(tramps);
    this.trampList = tramps;
    return tramps;
    // return this.trampList;
  }

  getTrampRequestList(): Array<TrampRequest>{
    return TrampRequestsMockUp;
  }

  async sendTrampRequest(tramp: Tramp) {
    const trampReq = <TrampRequest>{
        driverEmpId: tramp.driverDetails.driverEmpId,
        passangerEmpId: 37897,
        trampDate: new Date(),
        requestStatus: 1
      };
    const updatedTramp = await this.httpService.addTrampRequest<Tramp>('api/addTrampRequest', trampReq);
    console.log(updatedTramp);
    const existingUpdatedTramp = this.trampList.filter(t => t.driverDetails.driverEmpId === updatedTramp.driverDetails.driverEmpId)[0];
    existingUpdatedTramp.trampRequstStatus = updatedTramp.trampRequstStatus;
    this.setRequestAdditionalData(new Array<Tramp>(existingUpdatedTramp));
  }

  sendTrampRequest_old(tramp: Tramp) {
    TrampsRequestMockUp.push(<TrampRequest>{
      id:1,
      driverEmpId: tramp.driverDetails.driverEmpId,
      passangerEmpId: 37897,
      trampDate: new Date(),
      requestStatus: 0
    });
    tramp.trampRequstStatus = 1;
    this.setRequestAdditionalData(new Array<Tramp>(tramp));
  }

  getRequests(userId: number): Array<TrampRequest> {
    return TrampsRequestMockUp;
  }
  
  getUserDetails(id): Driver{
    return this.trampList[id].driverDetails;
  }

  setRequestAdditionalData(tramps: Array<Tramp>) {
    tramps.forEach(tramp => {
      if (tramp != null && tramp.trampRequstStatus != null) {
      switch (tramp.trampRequstStatus) {
        case 0:
          tramp.trampRequestIcon = "open";
          tramp.color = '#F3AD1A';
          break;
        case 1:
          tramp.trampRequestIcon = "send";
          tramp.color = '#BA69C8';
          break;
        case 2:
          tramp.trampRequestIcon = "ok";
          tramp.color = '#588952';
          break;
      }
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

export const TrampRequestsMockUp: Array<TrampRequest> = [
  <TrampRequest>{
    id:1,
    driverEmpId: 1,
    passangerEmpId: 2,
    trampDate: new Date("2018-02-25T08:15:00.511Z"),
    requestStatus: 0
  }
];

export let TrampsRequestMockUp: Array<TrampRequest> = new Array<TrampRequest>();
