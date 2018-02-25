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

export async function getAllTremps() {
    //await delay(1000);

    // throw new Error("DAL");
    return TrampsMockUp;
}