export interface Tramp {
    driverDetails: Driver;
    entranceAvgTime: Time;
    leavingAvgTime: Time;
    trampGrade: number;
    color: string;
}

export interface Driver {
    driverFirstName: string;
    driverLastName: string;
    driverAddress: Address;
    driverGender: string;
}


export interface Address {
    city: string;
    naborhood: string;
    street: string;
    buldingNumber: number;
}

export interface Time{
    hour: number;
    minute: number;
}
