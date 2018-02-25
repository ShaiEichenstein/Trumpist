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
exports.TrampsMockUp = [
    {
        driverDetails: {
            driverLastName: "אייכנשטיין",
            driverFirstName: "שי",
            driverGender: "זכר",
            driverAddress: {
                city: "רמת גן",
                street: "הרצל"
            },
        },
        trampGrade: 75,
        color: '#588952',
        entranceAvgTime: {
            hour: 8,
            minute: 20
        },
        leavingAvgTime: {
            hour: 19,
            minute: 30
        },
        trampRequstStatus: 0
    },
    {
        driverDetails: {
            driverLastName: "אפרגן",
            driverFirstName: "דרור",
            driverGender: "זכר",
            driverAddress: {
                city: "תל אביב",
                street: "אלנבי"
            },
        },
        trampGrade: 85,
        color: '#F3AD1A',
        entranceAvgTime: {
            hour: 8,
            minute: 40
        },
        leavingAvgTime: {
            hour: 16,
            minute: 30
        },
        trampRequstStatus: 0
    },
    {
        driverDetails: {
            driverLastName: "דפנה",
            driverFirstName: "פאן",
            driverGender: "נקבה",
            driverAddress: {
                city: "חיפה",
                street: "הנביאים"
            },
        },
        trampGrade: 40,
        color: '#BA69C8',
        entranceAvgTime: {
            hour: 9,
            minute: 0
        },
        leavingAvgTime: {
            hour: 18,
            minute: 0
        },
        trampRequstStatus: 0
    },
    {
        driverDetails: {
            driverLastName: "אסף",
            driverFirstName: "גאן",
            driverGender: "זכר",
            driverAddress: {
                city: "חיפה",
                street: "אלנבי"
            },
        },
        trampGrade: 60,
        color: '#F3AD1A',
        entranceAvgTime: {
            hour: 7,
            minute: 10
        },
        leavingAvgTime: {
            hour: 17,
            minute: 0
        },
        trampRequstStatus: 0
    },
    {
        driverDetails: {
            driverLastName: "מירב",
            driverFirstName: "בוכריס",
            driverGender: "נקבה",
            driverAddress: {
                city: "אילת",
                street: "הנביאים"
            },
        },
        trampGrade: 67,
        color: '#BA69C8',
        entranceAvgTime: {
            hour: 6,
            minute: 20
        },
        leavingAvgTime: {
            hour: 15,
            minute: 30
        },
        trampRequstStatus: 0
    }
];
function getAllTramps() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            //await delay(1000);
            // throw new Error("DAL");
            return [2 /*return*/, exports.TrampsMockUp];
        });
    });
}
exports.getAllTramps = getAllTramps;
//# sourceMappingURL=dal.js.map