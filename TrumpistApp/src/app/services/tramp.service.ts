import { element } from "protractor";
import { Injectable } from "@angular/core";
import { Tramp } from "./../models/tramp";
import { HttpService } from "./http.service";
import { promise } from "protractor";
import { TrampRequest, TrampRequestForDisplay } from "../models/trampRequest";
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

  async getTrampRequestList(user: User): Promise<TrampRequestForDisplay[]> {
    // const trampsRequests = await this.httpService.requestGetData<TrampRequestForDisplay[]>("api/getTrampsRequests");
    // console.log(trampsRequests);
    // //this.setRequestAdditionalData(tramps);
    // //this.trampList = tramps;
    // return trampsRequests;
    console.log(user);
    const trampsRequests = await this.httpService.postTrampRequestList<
      TrampRequestForDisplay[]
    >("api/getTrampsRequests", user);
    console.log(trampsRequests);

    // const existingUpdatedTramp = this.trampList.filter(
    //   t => t.driverDetails.userId === updatedTrampRequest.driverUserID
    // )[0];

    // existingUpdatedTramp.trampRequestStatus = updatedTrampRequest.requestStatus;

    // this.setRequestAdditionalData(new Array<Tramp>(existingUpdatedTramp));

    return trampsRequests;
  }

  async sendTrampRequest(trampReq: TrampRequest) {
    const updatedTrampRequest = await this.httpService.postTrampRequest<
      TrampRequest
    >("api/addTrampRequest", trampReq);
    const existingUpdatedTramp = this.trampList.filter(
      t => t.driverDetails.userId === updatedTrampRequest.driverUserID
    )[0];
    existingUpdatedTramp.trampRequestStatus = updatedTrampRequest.requestStatus;
    this.setRequestAdditionalData(new Array<Tramp>(existingUpdatedTramp));
  }

  async updateTrampRequestStatus(trampReq: TrampRequest) {
    const updatedTrampRequest = await this.httpService.postTrampRequest<
      TrampRequest
    >("api/updateTrampRequest", trampReq);
    // console.log(updatedTrampRequest);
    const existingUpdatedTramp = this.trampList.filter(
      t => t.driverDetails.userId === updatedTrampRequest.driverUserID
    )[0];
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

  getUserDetails(id): User {
    return this.trampList[id].driverDetails;
  }

  setRequestAdditionalData(tramps: Array<Tramp>) {
    tramps.forEach(tramp => {
      if (tramp != null) {
        if (tramp.trampRequestStatus == null) {
          tramp.trampRequestStatus = 0;
        }
        switch (tramp.trampRequestStatus) {
          case 0:
            tramp.trampRequestIcon = "open";
            tramp.color = "#F3AD1A";
            break;
          case 1:
            tramp.trampRequestIcon = "send";
            tramp.color = "#BA69C8";
            break;
          case 2:
            tramp.trampRequestIcon = "ok";
            tramp.color = "#588952";
            break;
        }
      }
    });
  }
}

export let TrampsRequestMockUp: Array<TrampRequest> = new Array<TrampRequest>();
