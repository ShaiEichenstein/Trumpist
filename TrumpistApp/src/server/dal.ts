import { delay } from "./helpers";
import { Tramp, User } from "../app/models/tramp";
import { TrampRequest } from "../app/models/trampRequest";

// export async function getAllTramps() {
//   //await delay(1000);

//   // throw new Error("DAL");
//   return TrampsMockUp;
// }

export async function addTrampRequest(trampRequst: TrampRequest) {
  if (trampRequst != null) {
    TrampsRequestMockUp.push(trampRequst);
    const tramp = TrampsMockUp.filter(
      t => t.driverDetails.userId === trampRequst.driverUserID
    )[0];
    if (tramp != null) {
      console.log(tramp);
      tramp['trampRequestStatus'] = 1;
    } else { console.log("tramp is null"); }
    return tramp;
  } else { console.log("trampRequst is null"); }
}


export async function getUser(userID: number) {
  const userDetMockup: User = <User>{
      lastName: "אייכנשטיין",
      firstName: "שי",
      Gender: "זכר",
      Address: {
        city: "רמת גן",
        street: "הרצל"
      },
      entranceAvgTime: {
        hour: 8,
        minute: 20
      }
  };
  // userMockUp.push(userID);
  //   const tramp = TrampsMockUp.filter(
  //     t => t.driverDetails.userId === trampRequst.driverUserID
  //   )[0];
  //   if (tramp != null) {
  //     console.log(tramp);
  //     tramp['trampRequestStatus'] = 1;
  //   } else { console.log("tramp is null"); }
    return userDetMockup;
  //} else { console.log("userID is null"); }
}

export let TrampsRequestMockUp: Array<TrampRequest> = new Array<TrampRequest>();



export const passanger: Tramp = <Tramp>{
  driverDetails: {
    lastName: "אייכנשטיין",
    firstName: "שי",
    Gender: "זכר",
    Address: {
      city: "רמת גן",
      street: "הרצל"
    },
    entranceAvgTime: {
      hour: 8,
      minute: 20
    },
  },
  trampGrade: 75,
  color: '#588952',
  
};

export const TrampsMockUp: Array<Tramp> = [
  <Tramp>{
    driverDetails: {
      userId: 12345,
      lastName: "אייכנשטיין",
      firstName: "שי",
      Gender: "זכר",
      Address: {
        city: "רמת גן",
        street: "הרצל"
      },
      entranceAvgTime: {
        hour: 8,
        minute: 20
      },
      leavingAvgTime: {
        hour: 19,
        minute: 30
      },
    },
    trampGrade: 75,
    color: '#588952',
    
    trampRequestStatus: 0
  },
  <Tramp>{
    driverDetails: {
      userId: 222,
      lastName: "אפרגן",
      firstName: "דרור",
      Gender: "זכר",
      Address: {
        city: "תל אביב",
        street: "אלנבי"
      },
      entranceAvgTime: {
        hour: 8,
        minute: 40
      },
      leavingAvgTime: {
        hour: 16,
        minute: 30
      },
    },
    trampGrade: 85,
    color: '#F3AD1A',
    trampRequestStatus: 0
  },
  <Tramp>{
    driverDetails: {
      userId: 4444,
      lastName: "דפנה",
      firstName: "פאן",
      Gender: "נקבה",
      Address: {
        city: "חיפה",
        street: "הנביאים"
      },
      entranceAvgTime: {
        hour: 9,
        minute: 0
      },
      leavingAvgTime: {
        hour: 18,
        minute: 0
      },
    },
    trampGrade: 40,
    color: '#BA69C8',    
    trampRequestStatus: 0,
  },
  <Tramp>{
    driverDetails: {
      userId: 12312,
      lastName: "אסף",
      firstName: "גאן",
      Gender: "זכר",
      Address: {
        city: "חיפה",
        street: "אלנבי"
      },
      entranceAvgTime: {
        hour: 7,
        minute: 10
      },
      leavingAvgTime: {
        hour: 17,
        minute: 0
      },
    },
    trampGrade: 60,
    color: '#F3AD1A',
    trampRequestStatus: 0
  },
  <Tramp>{
    driverDetails: {
      userId: 555,
      lastName: "מירב",
      firstName: "בוכריס",
      Gender: "נקבה",
      Address: {
        city: "אילת",
        street: "הנביאים"
      },
      entranceAvgTime: {
        hour: 6,
        minute: 20
      },
      leavingAvgTime: {
        hour: 15,
        minute: 30
      },
    },
    trampGrade: 67,
    color: '#BA69C8',
    
    trampRequestStatus: 0
  },
  <Tramp>{
    driverDetails: {
      userId: 4242,
      lastName: "משה",
      firstName: "משה",
      Gender: "זכר",
      Address: {
        city: "רמת גן",
        street: "הרצל"
      },
      entranceAvgTime: {
        hour: 8,
        minute: 10
      },
    },
    trampGrade: 75,
    color: '#588952',
    trampRequestStatus: 0
  },
  <Tramp>{
    driverDetails: {
      userId: 123155,
      lastName: "לוי",
      firstName: "אבי",
      Gender: "זכר",
      Address: {
        city: "רמת גן",
        street: "הבורסה"
      },
      entranceAvgTime: {
        hour: 7,
        minute: 20
      },
    },
    trampGrade: 75,
    color: '#588952',
    trampRequestStatus: 0
  },
  <Tramp>{
    driverDetails: {
      userId: 856,
      lastName: "אהרון",
      firstName: "מאיה",
      Gender: "נקבה",
      Address: {
        city: "רמת גן",
        street: "אורות"
      },
      entranceAvgTime: {
        hour: 8,
        minute: 20
      },
    },
    trampGrade: 75,
    color: '#588952',
    trampRequestStatus: 0
  }
];

export async function getAllTramps() {
  calcGrades();
  return TrampsMockUp;
}

function calcGrades() {
  TrampsMockUp.forEach(tramp => {
    let grade = 0;
    if (tramp.driverDetails.Address.city == passanger.driverDetails.Address.city) {
      grade += 40;
      if (tramp.driverDetails.Address.street == passanger.driverDetails.Address.street) {
        grade += 20;
      }
      if (tramp.driverDetails.entranceAvgTime.hour == passanger.driverDetails.entranceAvgTime.hour) {
        grade += 30;
        if (tramp.driverDetails.entranceAvgTime.minute == passanger.driverDetails.entranceAvgTime.minute) {
          grade += 10;
        }
      }
    }
    tramp.trampGrade = grade;
  });
}
