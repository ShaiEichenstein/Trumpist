"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
//import * as mongodb from "mongodb";
var mongodb_1 = require("mongodb");
//const mongodb = require("mongodb");
// export async function getAllTramps() {
//   //await delay(1000);
//   // throw new Error("DAL");
//   return TrampsMockUp;
// }
// mongodb.Cursor.prototype.findAndModifyAsync = promisify(
//   mongodb.Cursor.prototype.findAndModify
// );
var DbClient = /** @class */ (function () {
    function DbClient() {
    }
    DbClient.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.db) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, mongodb_1.MongoClient.connect("mongodb://localhost:27017")];
                    case 2:
                        client = _a.sent();
                        this.db = client.db("trampistdb");
                        return [2 /*return*/, this.db];
                    case 3:
                        error_1 = _a.sent();
                        console.log("unable to connect to db");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, this.db];
                }
            });
        });
    };
    return DbClient;
}());
var dbClient = new DbClient();
//DbClient.db.Cursor.prototype.toArrayAsync = promisify(mongodb.Cursor.prototype.toArray);
var usersArr;
function addTrampRequest(trampRequst) {
    return __awaiter(this, void 0, void 0, function () {
        var db, trampReq, trampReqArr, query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("addTrampRequest");
                    if (!(trampRequst != null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, dbClient.connect()];
                case 1:
                    db = _a.sent();
                    trampReq = db.collection("tramp_request");
                    return [4 /*yield*/, trampReq
                            .find({
                            driverUserID: trampRequst.driverUserID,
                            passangerUserID: trampRequst.passangerUserID
                        })
                            .toArray()];
                case 2:
                    trampReqArr = _a.sent();
                    console.log(trampReqArr);
                    if (trampReqArr == null || trampReqArr.length === 0) {
                        trampReq.insert(trampRequst, function (err, res) {
                            if (err) {
                                throw err;
                            }
                            console.log(res);
                            console.log("request added!!!!");
                        });
                    }
                    else {
                        query = {
                            driverUserID: trampRequst.driverUserID,
                            passangerUserID: trampRequst.passangerUserID
                        };
                        // if the request already exists in the db update the request status back to sent
                        trampReq.findAndModify(query, // query
                        [["_id", "asc"]], // sort order
                        { $set: { requestStatus: trampRequst.requestStatus } }, // replacement, replaces only the field "hi"
                        {}, // options
                        function (err, res) {
                            if (err) {
                                console.warn("addRequest updated error" + err.message); // returns error if no matching object found
                            }
                            else {
                                console.log("addRequest res:");
                                console.log(res);
                                console.log("addRequest updated!!!!");
                            }
                        });
                    }
                    return [3 /*break*/, 4];
                case 3:
                    console.log("trampRequest is null");
                    _a.label = 4;
                case 4: return [2 /*return*/, trampRequst];
            }
        });
    });
}
exports.addTrampRequest = addTrampRequest;
function updateTrampRequest(trampRequst) {
    return __awaiter(this, void 0, void 0, function () {
        var db, trampReq, query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("updateTrampRequest");
                    if (!(trampRequst != null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, dbClient.connect()];
                case 1:
                    db = _a.sent();
                    trampReq = db.collection("tramp_request");
                    query = null;
                    if (trampRequst.id != null) {
                        console.log("by id");
                        query = {
                            id: trampRequst.id
                        };
                    }
                    else {
                        console.log("by params");
                        query = {
                            driverUserID: trampRequst.driverUserID,
                            passangerUserID: trampRequst.passangerUserID
                        };
                    }
                    try {
                        trampReq.findAndModify(query, // query
                        [["_id", "asc"]], // sort order
                        { $set: { requestStatus: trampRequst.requestStatus } }, // replacement, replaces only the field "hi"
                        {}, // options
                        function (err, res) {
                            if (err) {
                                console.warn("updateTrampRequest2 updated error" + err.message); // returns error if no matching object found
                            }
                            else {
                                // console.log("updateTrampRequest2 res:");
                                // console.log(res);
                                console.log("updateTrampRequest2 updated!!!!");
                            }
                        });
                    }
                    catch (e) {
                        console.log(e);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    console.log("trampRequest is null");
                    _a.label = 3;
                case 3:
                    console.log("return update");
                    return [2 /*return*/, trampRequst];
            }
        });
    });
}
exports.updateTrampRequest = updateTrampRequest;
function addTrampRequestOLD(trampRequst) {
    return __awaiter(this, void 0, void 0, function () {
        var dbTrampreq;
        return __generator(this, function (_a) {
            console.log("addTrampRequest");
            dbTrampreq = null;
            if (trampRequst != null) {
                // checks if the request alredy exists
                dbTrampreq = getExistingRequest(trampRequst);
                if (dbTrampreq === null) {
                    exports.TrampsRequestMockUp.push(trampRequst);
                }
                else {
                    console.log("update existing request");
                    dbTrampreq.requestStatus = trampRequst.requestStatus;
                }
            }
            else {
                console.log("trampRequst is null");
            }
            // TODO get the new document from db and return it
            return [2 /*return*/, trampRequst];
        });
    });
}
exports.addTrampRequestOLD = addTrampRequestOLD;
function getExistingRequestOLD(trampRequst) {
    var dbTrampreq = null;
    if (trampRequst != null) {
        if (trampRequst.id != null) {
            dbTrampreq = exports.TrampsRequestMockUp.filter(function (req) { return req.id === trampRequst.id; });
        }
        else {
            dbTrampreq = exports.TrampsRequestMockUp.filter(function (req) {
                return req.driverUserID === trampRequst.driverUserID &&
                    req.passangerUserID === trampRequst.passangerUserID;
            }
            // &&  req.trampDate === trampRequst.trampDate
            );
        }
        if (dbTrampreq != null && dbTrampreq.length > 0) {
            return dbTrampreq[0];
        }
        else {
            return null;
        }
    }
}
function updateTrampRequest_OLD(trampRequst) {
    return __awaiter(this, void 0, void 0, function () {
        var dbTrampreq;
        return __generator(this, function (_a) {
            console.log("updateTrampRequest");
            dbTrampreq = null;
            if (trampRequst != null) {
                if (trampRequst.id != null) {
                    dbTrampreq = exports.TrampsRequestMockUp.filter(function (req) { return req.id === trampRequst.id; });
                }
                else {
                    dbTrampreq = exports.TrampsRequestMockUp.filter(function (req) {
                        return req.driverUserID === trampRequst.driverUserID &&
                            req.passangerUserID === trampRequst.passangerUserID;
                    }
                    // &&  req.trampDate === trampRequst.trampDate
                    );
                }
                // const tramp = TrampsMockUp.filter(
                //   t => t.driverDetails.driverEmpId === trampRequst.driverEmpId
                // );
                if (dbTrampreq != null && dbTrampreq.length > 0) {
                    // console.log(dbTrampreq);
                    dbTrampreq[0].requestStatus = trampRequst.requestStatus;
                }
                else {
                    console.log("trampRequst is null");
                }
                return [2 /*return*/, dbTrampreq[0]];
            }
            else {
                console.log("trampRequst is null");
            }
            return [2 /*return*/];
        });
    });
}
exports.updateTrampRequest_OLD = updateTrampRequest_OLD;
function getExistingRequest(trampRequst) {
    return __awaiter(this, void 0, void 0, function () {
        var dbTrampreq, db, trampReq, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    dbTrampreq = null;
                    return [4 /*yield*/, dbClient.connect()];
                case 1:
                    db = _b.sent();
                    trampReq = db.collection("tramp-request");
                    _a = this;
                    return [4 /*yield*/, trampReq
                            .find({
                            driverUserID: trampRequst.driverUserID,
                            passangerUserID: trampRequst.passangerUserID
                        })
                            .toArray()];
                case 2:
                    _a.trampReqArr = _b.sent();
                    console.log(this.trampReqArr);
                    if (trampRequst != null) {
                        if (trampRequst.id != null) {
                            dbTrampreq = exports.TrampsRequestMockUp.filter(function (req) { return req.id === trampRequst.id; });
                        }
                        else {
                            dbTrampreq = exports.TrampsRequestMockUp.filter(function (req) {
                                return req.driverUserID === trampRequst.driverUserID &&
                                    req.passangerUserID === trampRequst.passangerUserID;
                            }
                            // &&  req.trampDate === trampRequst.trampDate
                            );
                        }
                        if (dbTrampreq != null && dbTrampreq.length > 0) {
                            return [2 /*return*/, dbTrampreq[0]];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getAllTramps() {
    return __awaiter(this, void 0, void 0, function () {
        var db, users1, _a, trampReq, trampReqArr;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, dbClient.connect()];
                case 1:
                    db = _b.sent();
                    users1 = db.collection("users");
                    _a = this;
                    return [4 /*yield*/, users1.find().toArray()];
                case 2:
                    _a.usersArr = _b.sent();
                    trampReq = db.collection("tramp_request");
                    return [4 /*yield*/, trampReq
                            .find({
                            passangerUserID: 37897
                        })
                            .toArray()];
                case 3:
                    trampReqArr = _b.sent();
                    console.log(trampReqArr);
                    this.usersArr.forEach(function (tramp) {
                        var grade = 0;
                        if (tramp.driverDetails.address.city == exports.passanger.driverDetails.address.city) {
                            grade += 40;
                            if (tramp.driverDetails.address.street ==
                                exports.passanger.driverDetails.address.street) {
                                grade += 20;
                            }
                            if (tramp.driverDetails.entranceAvgTime.hour ==
                                exports.passanger.driverDetails.entranceAvgTime.hour) {
                                grade += 30;
                                if (tramp.driverDetails.entranceAvgTime.minute ==
                                    exports.passanger.driverDetails.entranceAvgTime.minute) {
                                    grade += 10;
                                }
                            }
                        }
                        tramp.trampGrade = grade;
                        tramp.trampRequestStatus = 0;
                        // set the tramp status according to the users requests
                        trampReqArr.forEach(function (req) {
                            if (req != null) {
                                if (req.driverUserID === tramp.driverDetails.userId) {
                                    console.log("reqStatus: " + req.requestStatus);
                                    tramp.trampRequestStatus = req.requestStatus;
                                }
                            }
                        });
                    });
                    return [2 /*return*/, this.usersArr]; //calcGrades();
            }
        });
    });
}
exports.getAllTramps = getAllTramps;
function calcGrades() {
    this.usersArr.forEach(function (tramp) {
        var grade = 0;
        if (tramp.driverDetails.address.city == exports.passanger.driverDetails.address.city) {
            grade += 40;
            if (tramp.driverDetails.address.street ==
                exports.passanger.driverDetails.address.street) {
                grade += 20;
            }
            if (tramp.driverDetails.entranceAvgTime.hour ==
                exports.passanger.driverDetails.entranceAvgTime.hour) {
                grade += 30;
                if (tramp.driverDetails.entranceAvgTime.minute ==
                    exports.passanger.driverDetails.entranceAvgTime.minute) {
                    grade += 10;
                }
            }
        }
        tramp.trampGrade = grade;
    });
}
function promisify(fn) {
    return function () {
        var args = Array.from(arguments);
        var me = this;
        return new Promise(function (resolve, reject) {
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
function getUser(userID) {
    return __awaiter(this, void 0, void 0, function () {
        var userDetMockup;
        return __generator(this, function (_a) {
            userDetMockup = {
                userId: 111,
                password: "111",
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
                    hour: 18,
                    minute: 25
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
            return [2 /*return*/, userDetMockup];
        });
    });
}
exports.getUser = getUser;
exports.TrampsRequestMockUp = new Array();
exports.passanger = {
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
exports.TrampsMockUp = [
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
//# sourceMappingURL=dal.js.map