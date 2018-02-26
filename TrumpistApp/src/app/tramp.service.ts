import { Injectable } from "@angular/core";
import { Tramp, Driver } from "./models/tramp";
import { TrampRequest } from "./models/trampRequst";
@Injectable()
export class TrampService {
  trampList: Array<Tramp>;
  trampRequestList: Array<TrampRequest>;

  constructor() {
    this.trampList = TrampsMockUp;
    this.trampRequestList = TrampRequestsMockUp;
  }

  getTramps(): Array<Tramp> {
    return this.trampList;
  }

  getTrampRequestList(): Array<TrampRequest> {
    return this.trampRequestList;
  }

  getUserDetails(id): Driver{
    return this.trampList[id].driverDetails;
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

export const TrampRequestsMockUp: Array<TrampRequest> = [
  <TrampRequest>{
    id:1,
    driverEmpId: 1,
    passangerEmpId: 2,
    trampDate: "2012-04-23T18:25:43.511Z",
    requestStatus: 75
  }
];
