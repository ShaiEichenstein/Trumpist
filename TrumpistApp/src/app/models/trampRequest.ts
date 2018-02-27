import { User } from "./tramp";

export interface TrampRequest {
    id: number;
    driverUserID: number;
    passangerUserID: number;
    trampDate: Date;
    requestStatus: number;
}


export interface TrampRequestForDisplay {
    id: number;
    driverUserId: number;
    passangerUser: User;
    trampDate: Date;
    requestStatus: number;
}