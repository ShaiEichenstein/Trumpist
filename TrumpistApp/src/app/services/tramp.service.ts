import { element } from "protractor";
import { Injectable } from "@angular/core";
import { Tramp } from "./../models/tramp";
import { HttpService } from "./http.service";
import { promise } from "protractor";
import { TrampRequest } from "../models/trampRequest";
import { User } from "../models/tramp";

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
    return TrampsRequestMockUp;
  }

  async sendTrampRequest(tramp: Tramp) {
    const trampReq = <TrampRequest>{
        driverUserID: tramp.driverDetails.userId,
        passangerUserID: 37897,
        trampDate: new Date(),
        requestStatus: 1
      };
    const updatedTramp = await this.httpService.addTrampRequest<Tramp>('api/addTrampRequest', trampReq);
    console.log(updatedTramp);
    const existingUpdatedTramp = this.trampList.filter(t => t.driverDetails.userId === updatedTramp.driverDetails.userId)[0];
    existingUpdatedTramp.trampRequestStatus = updatedTramp.trampRequestStatus;
    this.setRequestAdditionalData(new Array<Tramp>(existingUpdatedTramp));
  }

  async updateTrampRequest(tramp: Tramp, requestStatus: number) {
    const trampReq = <TrampRequest>{
        driverUserID: tramp.driverDetails.userId,
        passangerUserID: 37897,
        trampDate: new Date(),
        requestStatus: requestStatus
      };
    const updatedTrampRequest = await this.httpService.addTrampRequest<TrampRequest>('api/updateTrampRequest', trampReq);
    console.log(updatedTrampRequest);
    const existingUpdatedTramp = this.trampList.filter(t => t.driverDetails.userId === updatedTrampRequest.driverUserID)[0];
    existingUpdatedTramp.trampRequestStatus = updatedTrampRequest.requestStatus;
    this.setRequestAdditionalData(new Array<Tramp>(existingUpdatedTramp));
  }

  // sendTrampRequest_old(tramp: Tramp) {
  //   TrampsRequestMockUp.push(<TrampRequest>{
  //     driverEmpId: tramp.driverDetails.driverEmpId,
  //     passangerEmpId: 37897,
  //     trampDate: new Date(),
  //     requestStatus: 1
  //   });
  //   tramp.trampRequstStatus = 1;
  //   this.setRequestAdditionalData(new Array<Tramp>(tramp));
  // }

  getRequests(userId: number): Array<TrampRequest> {
    return TrampsRequestMockUp;
  }
  
  getUserDetails(id): User{
    return this.trampList[id].driverDetails;
  }

  setRequestAdditionalData(tramps: Array<Tramp>) {
    tramps.forEach(tramp => {
      if (tramp != null && tramp.trampRequestStatus != null) {
      switch (tramp.trampRequestStatus) {
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

export let TrampsRequestMockUp: Array<TrampRequest> = new Array<TrampRequest>();
