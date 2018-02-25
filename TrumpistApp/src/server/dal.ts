import {delay} from "./helpers";
import { Tramp } from "../app/models/tramp";

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
      color: '#588952',
      entranceAvgTime : {
        hour: 8,
        minute: 20
      },
      leavingAvgTime : {
        hour: 19,
        minute: 30
      }
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
      color: '#F3AD1A',
      entranceAvgTime : {
        hour: 8,
        minute: 40
      },
      leavingAvgTime : {
        hour: 16,
        minute: 30
      }
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
      color: '#BA69C8',
      entranceAvgTime : {
        hour: 9,
        minute: 0
      },
      leavingAvgTime : {
        hour: 18,
        minute: 0
      }
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
      color: '#F3AD1A',
      entranceAvgTime : {
        hour: 7,
        minute: 10
      },
      leavingAvgTime : {
        hour: 17,
        minute: 0
      }
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
      color: '#BA69C8',
      entranceAvgTime : {
        hour: 6,
        minute: 20
      },
      leavingAvgTime : {
        hour: 15,
        minute: 30
      }
    }
  ];

export async function getAllTramps() {
    //await delay(1000);

    // throw new Error("DAL");
    return TrampsMockUp;
}