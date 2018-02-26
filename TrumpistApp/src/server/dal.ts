import { delay } from "./helpers";
import { Tramp } from "../app/models/tramp";
import { TrampRequest } from "../app/models/trampRequest";
//import * as mongodb from "mongodb";
import { MongoClient, Db, connect, ObjectId } from "mongodb";

//const mongodb = require("mongodb");

// export async function getAllTramps() {
//   //await delay(1000);

//   // throw new Error("DAL");
//   return TrampsMockUp;
// }

// mongodb.Cursor.prototype.findAndModifyAsync = promisify(
//   mongodb.Cursor.prototype.findAndModify
// );

class DbClient {
  public db: Db;

  async connect() {
    if (!this.db) {
      try {
        const client: MongoClient = await MongoClient.connect(
          "mongodb://localhost:27017"
        );
        this.db = client.db("trampistdb");
        return this.db;
      } catch (error) {
        console.log("unable to connect to db");
      }
    }
    return this.db;
  }
}

const dbClient = new DbClient();
//DbClient.db.Cursor.prototype.toArrayAsync = promisify(mongodb.Cursor.prototype.toArray);
var usersArr;

export async function addTrampRequest(trampRequst: TrampRequest) {
  console.log("addTrampRequest");

  if (trampRequst != null) {
    const db = await dbClient.connect();
    const trampReq = db.collection("tramp_request");
    const trampReqArr = await trampReq
      .find({
        driverUserID: trampRequst.driverUserID,
        passangerUserID: trampRequst.passangerUserID
      })
      .toArray();
    console.log(trampReqArr);

    if (trampReqArr == null || trampReqArr.length === 0) {
      trampReq.insert(trampRequst, function(err, res) {
        if (err) {
          throw err;
        }
        console.log(res);
        console.log("request added!!!!");
      });
    } else {
      let query = {
        driverUserID: trampRequst.driverUserID,
        passangerUserID: trampRequst.passangerUserID
      };
      // if the request already exists in the db update the request status back to sent
      trampReq.findAndModify(
        query, // query
        [["_id", "asc"]], // sort order
        { $set: { requestStatus: trampRequst.requestStatus } }, // replacement, replaces only the field "hi"
        {}, // options
        function(err, res) {
          if (err) {
            console.warn("addRequest updated error" + err.message); // returns error if no matching object found
          } else {
            console.log("addRequest res:");
            console.log(res);
            console.log("addRequest updated!!!!");
          }
        }
      );
    }
  } else {
    console.log("trampRequest is null");
  }

  return trampRequst;
}

export async function updateTrampRequest(trampRequst: TrampRequest) {
  console.log("updateTrampRequest");

  if (trampRequst != null) {
    const db = await dbClient.connect();
    const trampReq = db.collection("tramp_request");
    let query = null;
    if (trampRequst.id != null) {
      console.log("by id");
      query = {
        id: trampRequst.id
      };
    } else {
      console.log("by params");
      query = {
        driverUserID: trampRequst.driverUserID,
        passangerUserID: trampRequst.passangerUserID
      };
    }
    try {
      trampReq.findAndModify(
        query, // query
        [["_id", "asc"]], // sort order
        { $set: { requestStatus: trampRequst.requestStatus } }, // replacement, replaces only the field "hi"
        {}, // options
        function(err, res) {
          if (err) {
            console.warn("updateTrampRequest2 updated error" + err.message); // returns error if no matching object found
          } else {
            // console.log("updateTrampRequest2 res:");
            // console.log(res);
            console.log("updateTrampRequest2 updated!!!!");
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log("trampRequest is null");
  }
  console.log("return update");
  return trampRequst;
}

export async function addTrampRequestOLD(trampRequst: TrampRequest) {
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

function getExistingRequestOLD(trampRequst: TrampRequest) {
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

export async function updateTrampRequest_OLD(trampRequst: TrampRequest) {
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
async function getExistingRequest(trampRequst: TrampRequest) {
  let dbTrampreq = null;

  const db = await dbClient.connect();
  const trampReq = db.collection("tramp-request");
  this.trampReqArr = await trampReq
    .find({
      driverUserID: trampRequst.driverUserID,
      passangerUserID: trampRequst.passangerUserID
    })
    .toArray();
  console.log(this.trampReqArr);
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

export async function getAllTramps() {
  let db = await dbClient.connect();
  const users1 = db.collection("users");
  this.usersArr = await users1.find().toArray();

  const trampReq = db.collection("tramp_request");
  const trampReqArr = await trampReq
    .find({
      passangerUserID: 37897
    })
    .toArray();

  console.log(trampReqArr);

  this.usersArr.forEach(tramp => {
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
    tramp.trampRequestStatus = 0;

    // set the tramp status according to the users requests
    trampReqArr.forEach(req => {
      if (req != null) {
        if ((<TrampRequest>req).driverUserID === tramp.driverDetails.userId) {
          console.log("reqStatus: " + (<TrampRequest>req).requestStatus);
          tramp.trampRequestStatus = (<TrampRequest>req).requestStatus;
        }
      }
    });
  });

  return this.usersArr; //calcGrades();
}

function calcGrades() {
  this.usersArr.forEach(tramp => {
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

function promisify(fn) {
  return function() {
    const args = Array.from(arguments);
    const me = this;

    return new Promise(function(resolve, reject) {
      function callback(err, retVal) {
        if (err) {
          reject(err);
          return;
        }

        resolve(retVal);
      }

      args.push(callback);

      fn.apply(me, args);
    });
  };
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
