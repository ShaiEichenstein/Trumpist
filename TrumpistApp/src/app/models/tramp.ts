export interface Tramp {
    driverDetails: User;
    trampGrade: number;
    color: string;
    trampRequestStatus: number;
    trampRequestIcon: string;
}

export interface User {
    userId: number;
    password: string;
    firstName: string;
    lastName: string;
    address: Address;
    gender: string;
    entranceAvgTime: Time;
    leavingAvgTime: Time;
}


export interface Address {
    city: string;
    naborhood: string;
    street: string;
    buldingNumber: number;
}

export interface Time {
    hour: number;
    minute: number;
}
