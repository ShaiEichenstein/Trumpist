import { delay } from "./helpers";
import { Tramp } from "../app/models/tramp";
import { TrampRequest } from "../app/models/trampRequest";

// export async function getAllTramps() {
//   //await delay(1000);

//   // throw new Error("DAL");
//   return TrampsMockUp;
// }

export async function addTrampRequest(trampRequst: TrampRequest) {
  console.log("addTrampRequest");
  let dbTrampreq = null;
  if (trampRequst != null) {
    // checks if the request alredy exists
    dbTrampreq = getExistingRequest(trampRequst);
    if (dbTrampreq === null) {
      TrampsRequestMockUp.push(trampRequst);
    } else {
      console.log("update existing request");
      dbTrampreq.requestStatus = trampRequst.requestStatus;
    }
  } else {
    console.log("trampRequst is null");
  }
  // TODO get the new document from db and return it
  return trampRequst;
}

function getExistingRequest(trampRequst: TrampRequest) {
  let dbTrampreq = null;
  if (trampRequst != null) {
    if (trampRequst.id != null) {
      dbTrampreq = TrampsRequestMockUp.filter(req => req.id === trampRequst.id);
    } else {
      dbTrampreq = TrampsRequestMockUp.filter(
        req =>
          req.driverUserID === trampRequst.driverUserID &&
          req.passangerUserID === trampRequst.passangerUserID
        // &&  req.trampDate === trampRequst.trampDate
      );
    }
    if (dbTrampreq != null && dbTrampreq.length > 0) {
      return dbTrampreq[0];
    } else {
      return null;
    }
  }
}

export async function updateTrampRequest(trampRequst: TrampRequest) {
  console.log("updateTrampRequest");
  let dbTrampreq = null;
  if (trampRequst != null) {
    if (trampRequst.id != null) {
      dbTrampreq = TrampsRequestMockUp.filter(req => req.id === trampRequst.id);
    } else {
      dbTrampreq = TrampsRequestMockUp.filter(
        req =>
          req.driverUserID === trampRequst.driverUserID &&
          req.passangerUserID === trampRequst.passangerUserID
        // &&  req.trampDate === trampRequst.trampDate
      );
    }
    // const tramp = TrampsMockUp.filter(
    //   t => t.driverDetails.driverEmpId === trampRequst.driverEmpId
    // );
    if (dbTrampreq != null && dbTrampreq.length > 0) {
      // console.log(dbTrampreq);
      dbTrampreq[0].requestStatus = trampRequst.requestStatus;
    } else {
      console.log("trampRequst is null");
    }
    return dbTrampreq[0];
  } else {
    console.log("trampRequst is null");
  }
}

export let TrampsRequestMockUp: Array<TrampRequest> = new Array<TrampRequest>();

export const passanger: Tramp = <Tramp>{
  driverDetails: {
    lastName: "אייכנשטיין",
    firstName: "שי",
    gender: "זכר",
    address: {
      city: "רמת גן",
      street: "הרצל"
    },
    entranceAvgTime: {
      hour: 8,
      minute: 20
    }
  },
  trampGrade: 75
};

export const TrampsMockUp: Array<Tramp> = [
  <Tramp>{
    driverDetails: {
      userId: 12345,
      lastName: "אייכנשטיין",
      firstName: "שי",
      gender: "זכר",
      address: {
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
      }
    },
    trampGrade: 75,

    trampRequestStatus: 0
  },
  <Tramp>{
    driverDetails: {
      userId: 222,
      lastName: "אפרגן",
      firstName: "דרור",
      gender: "זכר",
      address: {
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
      }
    },
    trampGrade: 85,
    trampRequestStatus: 0
  },
  <Tramp>{
    driverDetails: {
      userId: 4444,
      lastName: "דפנה",
      firstName: "פאן",
      gender: "נקבה",
      address: {
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
      }
    },
    trampGrade: 40,
    trampRequestStatus: 0
  },
  <Tramp>{
    driverDetails: {
      userId: 12312,
      lastName: "אסף",
      firstName: "גאן",
      gender: "זכר",
      address: {
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
      }
    },
    trampGrade: 60,
    trampRequestStatus: 0
  },
  <Tramp>{
    driverDetails: {
      userId: 555,
      lastName: "מירב",
      firstName: "בוכריס",
      gender: "נקבה",
      address: {
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
      }
    },
    trampGrade: 67,
    trampRequestStatus: 2
  },
  <Tramp>{
    driverDetails: {
      userId: 4242,
      lastName: "משה",
      firstName: "משה",
      gender: "זכר",
      address: {
        city: "רמת גן",
        street: "הרצל"
      },
      entranceAvgTime: {
        hour: 8,
        minute: 10
      }
    },
    trampGrade: 75,
    trampRequestStatus: 2
  },
  <Tramp>{
    driverDetails: {
      userId: 123155,
      lastName: "לוי",
      firstName: "אבי",
      gender: "זכר",
      address: {
        city: "רמת גן",
        street: "הבורסה"
      },
      entranceAvgTime: {
        hour: 7,
        minute: 20
      }
    },
    trampGrade: 75,
    trampRequestStatus: 0
  },
  <Tramp>{
    driverDetails: {
      userId: 856,
      lastName: "אהרון",
      firstName: "מאיה",
      gender: "נקבה",
      address: {
        city: "רמת גן",
        street: "אורות"
      },
      entranceAvgTime: {
        hour: 8,
        minute: 20
      }
    },
    trampGrade: 75,
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
    if (
      tramp.driverDetails.address.city == passanger.driverDetails.address.city
    ) {
      grade += 40;
      if (
        tramp.driverDetails.address.street ==
        passanger.driverDetails.address.street
      ) {
        grade += 20;
      }
      if (
        tramp.driverDetails.entranceAvgTime.hour ==
        passanger.driverDetails.entranceAvgTime.hour
      ) {
        grade += 30;
        if (
          tramp.driverDetails.entranceAvgTime.minute ==
          passanger.driverDetails.entranceAvgTime.minute
        ) {
          grade += 10;
        }
      }
    }
    tramp.trampGrade = grade;
  });
}
